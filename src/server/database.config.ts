import {TypeOrmModuleOptions} from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";


export const DATABASE_CONFIG: TypeOrmModuleOptions = {
    type: "sqlite",
    database: 'data.db',
    logging: false,
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
    autoLoadEntities: true
}