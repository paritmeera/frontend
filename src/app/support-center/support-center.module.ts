import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { ConfirmationIssuesComponent } from './complaints/confirmation-issues/confirmation-issues.component';
import { MoneyIssuesComponent } from './complaints/money-issues/money-issues.component';
import { RefundIssuesComponent } from './complaints/refund-issues/refund-issues.component';
import { AppComponent } from '../app.component';
import { RefundService } from '../services/refund.service';

@NgModule({
  declarations: 
  [   FaqComponent, 
      ComplaintsComponent, 
      EmergencyContactComponent, 
      ConfirmationIssuesComponent, 
      MoneyIssuesComponent, 
      RefundIssuesComponent
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]

 // providers: [RefundService],
//  bootstrap: [AppComponent]
})
export class SupportCenterModule { }
