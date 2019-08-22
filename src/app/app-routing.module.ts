import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './registration/register/register.component';
import { RegistrationComponent } from './registration/registration.component';
import { AgentdetailsComponent } from './agentdetails/agentdetails.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { FaqComponent } from './support-center/faq/faq.component';
import { EmergencyContactComponent } from './support-center/emergency-contact/emergency-contact.component';
import { RefundIssuesComponent } from './support-center/complaints/refund-issues/refund-issues.component';
import { ConfirmationIssuesComponent } from './support-center/complaints/confirmation-issues/confirmation-issues.component';
import { MoneyIssuesComponent } from './support-center/complaints/money-issues/money-issues.component';
import { AgentsComponent } from './agentdetails/agents/agents.component';

import { DriversComponent } from './agentdetails/drivers/drivers.component';
import { TransportsComponent } from './agentdetails/transports/transports.component';
import { PackagedetailsComponent } from './packagedetails/packagedetails.component';
//import { RegisterComponent } from './registration/register/register.component';

const routes: Routes = [

  {path:'faq',component:FaqComponent},
  {path:'Emergency',component:EmergencyContactComponent},
  {path:'refund issues',component:RefundIssuesComponent},
  {path:'confirmation issues',component:ConfirmationIssuesComponent},
  {path:'money transfer issues',component:MoneyIssuesComponent},
  {path:'agents',component:AgentsComponent},
  {path:'transports',component:TransportsComponent},
  {path:'drivers',component:DriversComponent},
  
  {
    path:'packagedetails',
    component:PackagedetailsComponent

  },

    {
        path:'agentdetails',
        component:AgentdetailsComponent

    },
    {
        path: 'agent' , 
        component: RegistrationComponent
    },
    { 
      path:'',
       component:DashboardComponent
     }, 
     {
       path:'maps',
      component: MapsComponent
     }, 
     {
      path:'notify',
      component: NotificationsComponent
    },
    {
      path:'setting',
      component:SettingsComponent
    },

    {
      path:'supportcenter',
      component:SupportCenterComponent
    }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
