import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { RefundIssuesComponent } from './complaints/refund-issues/refund-issues.component';
import { ConfirmationIssuesComponent } from './complaints/confirmation-issues/confirmation-issues.component';
import { MoneyIssuesComponent } from './complaints/money-issues/money-issues.component';


const routes: Routes = [

  {path:'faq',component:FaqComponent},
  {path:'Emergency',component:EmergencyContactComponent},
  {path:'refund issues',component:RefundIssuesComponent},
  {path:'confirmation issues',component:ConfirmationIssuesComponent},
  {path:'money transfer issues',component:MoneyIssuesComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SupportCenterRoutingModule { }
