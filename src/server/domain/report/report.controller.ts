import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ReportService} from "./report.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('excel'))
    async uploadFile(@UploadedFile() excel: Express.Multer.File) {
        return await this.reportService.generateReport(excel);
    }
}
