import {Module} from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReportModule} from "./domain/report/report.module";
import {DATABASE_CONFIG} from "./database.config";
import {WEB_CONFIG} from "./web.config";

export const API = process.env.API_URL || `api`;

@Module({
    imports: [
        TypeOrmModule.forRoot(DATABASE_CONFIG),
        ServeStaticModule.forRoot(WEB_CONFIG),
        ReportModule,
    ],
})

export class AppModule {
}
