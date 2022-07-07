import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Report} from "src/model/report/report.model";
import {ActuatorService} from "../../infrastructure/actuator/actuator.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('signImg') img: ElementRef;

  readonly IMG_DATA_KEY = 'imgData';
  readonly IMG_LEFT_KEY = 'imgX';
  readonly IMG_TOP_KEY = 'imgY';
  readonly CONTRACT_KEY = 'contract';

  report: Report;
  contract: string = '';
  displayContractForm: boolean = false;

  imgSignLeft: number = null;
  imgSignTop: number = null;
  imgDragStartX: number = null;
  imgDragStartY: number = null;

  constructor(public actuatorService: ActuatorService) {
  }

  ngOnInit(): void {
    this.contract = localStorage.getItem(this.CONTRACT_KEY) ?? '';
    this.imgSignLeft = Number(localStorage.getItem(this.IMG_LEFT_KEY) ?? '0');
    this.imgSignTop = Number(localStorage.getItem(this.IMG_TOP_KEY) ?? '45');
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
    this.img.nativeElement.src = localStorage.getItem(this.IMG_DATA_KEY) ?? '';
  }

  saveContractToStorage(contract: string) {
    localStorage.setItem(this.CONTRACT_KEY, contract)
  }

  saveImgPositionToStorage() {
    localStorage.setItem(this.IMG_LEFT_KEY, String(this.imgSignLeft));
    localStorage.setItem(this.IMG_TOP_KEY, String(this.imgSignTop));
  }

  checkImageToDisplay() {
    return !!localStorage.getItem(this.IMG_DATA_KEY) ? 'block' : 'hidden';
  }

  hideContractForm() {
    this.displayContractForm = false;
  }

  showContractForm() {
    this.displayContractForm = true;
  }

  imgDragStart($event: DragEvent) {
    this.imgDragStartX = $event.clientX;
    this.imgDragStartY = $event.clientY;
  }

  imgDragEnd($event: DragEvent) {
    this.imgSignLeft += $event.clientX - this.imgDragStartX;
    this.imgSignTop += $event.clientY - this.imgDragStartY;
    this.saveImgPositionToStorage();
  }
}
