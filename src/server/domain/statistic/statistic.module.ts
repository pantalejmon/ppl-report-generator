import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {User} from "./user/user.entity";
import {UserService} from "./user/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService]
})
export class StatisticModule {

}