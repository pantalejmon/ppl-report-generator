import {Module} from "@nestjs/common";
import {ReportService} from "./report.service";
import {ReportController} from "./report.controller";
import {StatisticModule} from "../statistic/statistic.module";

@Module({
    imports: [StatisticModule],
    controllers: [ReportController],
    providers: [ReportService],
})
export class ReportModule {

}