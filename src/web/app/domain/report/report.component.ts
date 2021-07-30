import {Component, OnInit} from '@angular/core';
import {Report} from "./report.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report: Report;
  contract: string;

  constructor() {
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
