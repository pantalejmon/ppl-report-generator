import {Controller, FileTypeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ReportService} from "./report.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ACCEPTED_FILES} from "../../../model/report/accepted-types.model";

@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('excel'))
    async uploadFile(@UploadedFile(
        new ParseFilePipe({
                validators: [new FileTypeValidator({
                    fileType: new RegExp(`${ACCEPTED_FILES.join('|')}`)
                })]
            }
        )
    ) excel: Express.Multer.File) {
        return await this.reportService.generateReport(excel);
    }
}
