import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    async invoke(username: string, fullName: string) {
        let user: User = await this.usersRepository.findOneBy({
            username,
            fullName
        })

        if (user) {
            user.addAttempt()
        } else {
            user = new User(username, fullName, 1)
        }

        await this.usersRepository.save(user)
    }
}