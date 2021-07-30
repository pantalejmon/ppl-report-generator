import {Injectable} from '@nestjs/common';
import {read, utils, WorkBook, WorkSheet} from 'xlsx'
import {DATE, HOURS, KEY, NAME, Report, SUMMARY, Task} from "./report.model";

@Injectable()
export class ReportService {

    async generateReport(excel: Express.Multer.File) {
        const reportData: Report = this.excelToReportModel(excel);
        reportData.prepareDates();
        return reportData;
    }

    prepareName(fullname: string) {
        const nameArray: string[] = fullname.split(', ')
        return `${nameArray[1]} ${nameArray[0]};`
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
        let task: Task = report.tasks
            .find(task => task.key == row[KEY]);

        const date = row[DATE];

        if (!report.from || report.from > date) {
            report.from = date;
        }


        if (!report.to || report.to < date) {
            report.to = date;
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
}
