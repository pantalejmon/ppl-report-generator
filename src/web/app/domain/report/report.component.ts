import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Report} from "src/model/report/report.model";
import {ActuatorService} from "../../infrastructure/actuator/actuator.service";
import {ACCEPTED_FILES} from "../../../../model/report/accepted-types.model";
import {FileUpload, FileUploadErrorEvent, FileUploadEvent} from "primeng/fileupload";
import {HttpEventType} from "@angular/common/http";
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('signImg') img: ElementRef;
  @ViewChildren(FileUpload) upload: QueryList<FileUpload>;

  readonly IMG_DATA_KEY = 'imgData';
  readonly IMG_LEFT_KEY = 'imgX';
  readonly IMG_TOP_KEY = 'imgY';
  readonly CONTRACT_KEY = 'contract';
  readonly acceptedFileTypes = ACCEPTED_FILES.join(', ');

  report: Report;
  contract: string = '';
  displayContractForm: boolean = false;
  edit: boolean = false;
  displayImageClass: 'hidden' | 'block';

  imgSignLeft: number = null;
  imgSignTop: number = null;
  imgDragStartX: number = null;
  imgDragStartY: number = null;
  readonly signMenu: MenuItem[] = [{
    label: 'Usuń podpis',
    icon: 'pi pi-trash',
    command: () => {
      localStorage.removeItem(this.IMG_DATA_KEY);
      this.refreshSignVisibility();
    }
  }];

  constructor(public actuatorService: ActuatorService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.contract = localStorage.getItem(this.CONTRACT_KEY) ?? '';
    this.imgSignLeft = Number(localStorage.getItem(this.IMG_LEFT_KEY) ?? '0');
    this.imgSignTop = Number(localStorage.getItem(this.IMG_TOP_KEY) ?? '45');

    this.refreshSignVisibility();
  }

  onUpload(data: FileUploadEvent) {
    switch (data.originalEvent?.type) {
      case HttpEventType.Response:
        this.report = new Report(data.originalEvent.body);
        setTimeout(() => this.loadImageFromStorage());
    }
  }

  print() {
    this.edit = false;
    document.title = `Raport_${this.report.name.replace(' ', '_')}_za_okres_${this.report.period.toLowerCase().replace(' ', '_')}`
    setTimeout(() => window.print(), 1)
  }

  uploadSign(event: any) {
    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onload = () => {
      localStorage.setItem(this.IMG_DATA_KEY, fileReader.result as string);
      this.loadImageFromStorage();
      event.target.value = '';
    }

    fileReader.readAsDataURL(file);
    this.refreshSignVisibility()
  }

  loadImageFromStorage() {
    this.img.nativeElement.src = localStorage.getItem(this.IMG_DATA_KEY) ?? '';
    this.refreshSignVisibility()
  }

  saveContractToStorage(contract: string) {
    localStorage.setItem(this.CONTRACT_KEY, contract)
  }

  saveImgPositionToStorage() {
    localStorage.setItem(this.IMG_LEFT_KEY, String(this.imgSignLeft));
    localStorage.setItem(this.IMG_TOP_KEY, String(this.imgSignTop));
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

  editReport() {
    this.edit = !this.edit;
  }

  onError($event: FileUploadErrorEvent) {
    this.upload.forEach(it => it.clear())
    this.messageService.add({severity: 'error', summary: 'Error', detail: $event.error.error.error});
    this.report = null;
  }

  private refreshSignVisibility() {
    this.displayImageClass = !!localStorage.getItem(this.IMG_DATA_KEY) ? 'block' : 'hidden';
  }
}
