import {Injectable} from '@nestjs/common';
import {DATE, HOURS, KEY, MONTHS, NAME, Report, SUMMARY, Task, USERNAME} from 'src/model/report/report.model';
import {read, utils, WorkBook, WorkSheet} from 'xlsx'
import {UserService} from "../statistic/user/user.service";

@Injectable()
export class ReportService {

    constructor(private userService: UserService) {
    }

    async generateReport(report: Express.Multer.File) {
        const reportData: Report = this.excelToReportModel(report);
        reportData.prepareDate();
        await this.userService.invoke(reportData.username, reportData.name);

        return reportData;
    }

    private excelToReportModel(excel: Express.Multer.File): Report {
        const reportWorkbook: WorkBook = read(excel.buffer, {type: "buffer", cellDates: true, codepage: 65001})

        const reportSheet: WorkSheet = reportWorkbook.Sheets[reportWorkbook.SheetNames[0]];
        const reportData: Report = new Report();

        utils.sheet_to_json(reportSheet)
            .forEach(row => this.parseRowToReport(row, reportData))
        return reportData;
    }

    private parseRowToReport(row: any, report: Report) {
        const task: Task = report.tasks
            .find(task => task.key == row[KEY]);

        const date = row[DATE];

        if (!report.period) {
            report.period = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
        }

        if (!report.name) {
            report.name = this.readName(row);
        }

        if (!report.username) {
            report.username = this.readUsername(row);
        }

        if (task) {
            task.hours += row[HOURS];
        } else {
            report.tasks.push({
                key: row[KEY],
                summary: row[SUMMARY],
                hours: row[HOURS]
            })
        }
    }

    private readName(row: any) {
        let fullName: string = row[NAME];

        if (fullName.includes(',')) {
            fullName = this.prepareName(fullName);
        }

        return fullName;
    }

    private readUsername(row: any) {
        return row[USERNAME];
    }

    private prepareName(fullname: string) {
        const nameArray: string[] = fullname.replace(/\s/g, '')
            .split(',')
        return `${nameArray[1]} ${nameArray[0]}`;
    }
}
