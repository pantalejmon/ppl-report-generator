import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import {ReportComponent} from './domain/report/report.component';
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {GenderPipe} from './domain/report/util/gender.pipe';
import {GenderSignPipe} from './domain/report/util/gender-sign.pipe';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {RippleModule} from "primeng/ripple";
import {GenderProvidePipe} from './domain/report/util/gender-provide.pipe';
import {SidebarModule} from "primeng/sidebar";

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    GenderPipe,
    GenderSignPipe,
    GenderProvidePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FileUploadModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ToolbarModule,
    OverlayPanelModule,
    RippleModule,
    SidebarModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
