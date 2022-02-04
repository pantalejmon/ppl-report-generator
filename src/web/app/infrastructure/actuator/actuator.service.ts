import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Info} from "./actuator.model";

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {

  private _version: string

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/info')
      .subscribe({
        next: (info: Info) => {
          console.log()
          return this._version = info.build.version;
        }
      })
  }

  get version(): string {
    return this._version;
  }
}
