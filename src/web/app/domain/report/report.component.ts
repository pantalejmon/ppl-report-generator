import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Report} from "src/model/report/report.model";
import {VersionService} from "../../infrastructure/version/version.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('signImg') img: ElementRef;

  readonly IMG_DATA_KEY = 'imgData'
  readonly CONTRACT_KEY = 'contract'

  report: Report;
  contract: string;

  constructor(public versionService: VersionService) {
  }

  ngOnInit(): void {
    this.contract = localStorage.getItem(this.CONTRACT_KEY) ?? '';
  }

  onUpload(data) {
    if (data.originalEvent.body) {
      this.report = new Report(data.originalEvent.body);
      setTimeout(() => this.loadImageFromStorage());
    }
  }

  print() {
    window.print();
  }

  uploadSign(event: any) {
    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onload = () => {
      localStorage.setItem(this.IMG_DATA_KEY, fileReader.result as string);
      this.loadImageFromStorage();
    }

    fileReader.readAsDataURL(file);
  }

  loadImageFromStorage() {
    this.img.nativeElement.src = localStorage.getItem(this.IMG_DATA_KEY);
  }

  saveContractToStorage(contract: string) {
    localStorage.setItem(this.CONTRACT_KEY, contract)
  }

  checkImageToDisplay() {
    return !!localStorage.getItem(this.IMG_DATA_KEY) ? 'block' : 'hidden';
  }
}
