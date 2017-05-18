import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StringToDatePipe} from './pipes/string-to-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    StringToDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
