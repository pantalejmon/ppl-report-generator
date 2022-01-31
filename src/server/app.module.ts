import {Module} from '@nestjs/common';
import {join} from "path";
import {ServeStaticModule} from "@nestjs/serve-static";
import {ReportController} from "./domain/report/report.controller";
import {ReportService} from "./domain/report/report.service";

export const API = process.env.API_URL || `api`;

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', `web`),
            exclude: [`/${API}*`],
        }),
    ],
    controllers: [ReportController],
    providers: [ReportService],
})

export class AppModule {
}
