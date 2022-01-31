import {Component, OnInit} from '@angular/core';
import {Report} from "src/model/report/report.model";
import {VersionService} from "../../infrastructure/version/version.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report: Report;
  contract: string;

  constructor(public versionService: VersionService) {
  }

  ngOnInit(): void {
  }

  onUpload(data) {
    if (data.originalEvent.body) {
      this.report = new Report(data.originalEvent.body);
    }
  }

  print() {
    window.print();
  }
}
