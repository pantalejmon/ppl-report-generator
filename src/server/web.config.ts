import {ServeStaticModuleOptions} from "@nestjs/serve-static/dist/interfaces/serve-static-options.interface";
import {join} from "path";
import {API} from "./app.module";

export const WEB_CONFIG: ServeStaticModuleOptions = {
    rootPath: join(__dirname, '..', `web`),
    exclude: [`/${API}*`],
}