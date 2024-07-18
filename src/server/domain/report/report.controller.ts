import {
    Controller,
    FileTypeValidator,
    HttpException,
    HttpStatus,
    Logger,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {ReportService} from "./report.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ACCEPTED_FILES} from "../../../model/report/accepted-types.model";

@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('report'))
    async uploadFile(@UploadedFile(
        new ParseFilePipe({
                validators: [new FileTypeValidator({
                    fileType: new RegExp(`${ACCEPTED_FILES.join('|')}`)
                })]
            }
        )
    ) report: Express.Multer.File) {
        try {
            return await this.reportService.generateReport(report);
        } catch (error) {
            Logger.error(error)
            throw new HttpException({
                status: HttpStatus.I_AM_A_TEAPOT,
                error: 'Wrong file'
            }, HttpStatus.I_AM_A_TEAPOT, {
                cause: error
            })
        }
    }
}
