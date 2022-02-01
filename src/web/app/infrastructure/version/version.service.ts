import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Version} from "../../../../model/version/version.model";

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private _version: string

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/version')
      .subscribe({
        next: (versionWrapper: Version) => this._version = versionWrapper.version
      })
  }

  get version(): string {
    return this._version;
  }
}
