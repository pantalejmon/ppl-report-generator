import {Injectable} from '@nestjs/common';
import {DATE, HOURS, KEY, MONTHS, NAME, Report, SUMMARY, Task} from 'src/model/report/report.model';
import {read, utils, WorkBook, WorkSheet} from 'xlsx'

@Injectable()
export class ReportService {

    async generateReport(excel: Express.Multer.File) {
        const reportData: Report = this.excelToReportModel(excel);
        reportData.prepareDates();

        return reportData;
    }


    private excelToReportModel(excel: Express.Multer.File): Report {
        const reportWorkbook: WorkBook = read(excel.buffer, {type: "buffer", cellDates: true, dateNF: 'dd.mm.yyyy'})

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
            report.name = this.prepareName(row[NAME]);
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

    private prepareName(fullname: string) {
        const nameArray: string[] = fullname.split(', ')
        return `${nameArray[1]} ${nameArray[0]}`;
    }
}
