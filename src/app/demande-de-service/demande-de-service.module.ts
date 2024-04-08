
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeDServiceRoutingModule } from './demande-de-service-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainComponent ,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DemandeDServiceRoutingModule ,
    //NgbModule,
    HttpClientModule,
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandeDServiceModule { }
