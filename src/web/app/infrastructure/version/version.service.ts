import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Version} from "../../../../model/version/version.model";

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/version')
      .subscribe({
        next: (versionWrapper: Version) => this._version = versionWrapper.version
      })
  }

  private _version: string

  get version(): string {
    return this._version;
  }

}
