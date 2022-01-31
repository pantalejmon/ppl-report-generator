import {Injectable} from "@nestjs/common";
import {Version} from "../../../model/version/version.model";
import * as version from 'project-version';

@Injectable()
export class VersionService {

    getCurrentVersion(): Version {
        return {version}
    }
}