import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ReportService} from "./report.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiOperation} from "@nestjs/swagger";

@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {
    }

    @Post()
    @ApiOperation({
        summary: "Send report file to server",
        requestBody: {
            description: "XLS report file",
            content: {"XLS file": {schema: {format: "binary"}}}, required: true}})
    @UseInterceptors(FileInterceptor('excel'))
    async uploadFile(@UploadedFile() excel: Express.Multer.File) {
        return await this.reportService.generateReport(excel);
    }
}
