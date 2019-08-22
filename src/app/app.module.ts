import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MaterialModule} from  "./material/material.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterComponent } from './registration/register/register.component';
import { RegisterService} from './services/register.service';
//import { MyErrorStateMatcher } from './validator/compare-validator.directive';
import { CompareValidatorDirective, BlockCopyPasteDirective} from './validator/compare-validator.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatSnackBarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
//import { Trim } from './trim.validator/trim.validator.component';
import { AgmCoreModule } from '@agm/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { AgentsComponent } from './agentdetails/agents/agents.component';
import { TransportsComponent } from './agentdetails/transports/transports.component';
import { DriversComponent } from './agentdetails/drivers/drivers.component';
import {MatTableModule} from '@angular/material/table';
import { AgentdetailsComponent } from './agentdetails/agentdetails.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { SupportCenterModule } from './support-center/support-center.module';
import { PackagedetailsComponent } from './packagedetails/packagedetails.component';
import { PackagesComponent } from './packagedetails/packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegisterComponent,
   // MyErrorStateMatcher
    CompareValidatorDirective,
    BlockCopyPasteDirective,
    DashboardComponent,
    SideNavComponent,
    MapsComponent,
    NotificationsComponent,
    SettingsComponent,
    AgentsComponent,
    TransportsComponent,
    DriversComponent,
    AgentdetailsComponent,
    SupportCenterComponent,
    PackagedetailsComponent,
    PackagesComponent,
    //Trim.ValidatorComponent,
    
  ],
  imports: [
    AgmCoreModule.forRoot({
      // apiKey: 'YOUR_GOOGLE_MAP_API_KEY'
      apiKey: 'AIzaSyB14P5ARNpIE0XudLvIv0tKgA2FwUehMJQ'
    }),  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    RouterModule,
    MatTableModule,
    SupportCenterModule,
    MatInputModule,
    MatFormFieldModule ,
    
    // RouterModule.forRoot([
    //   { 
    //     path:'',
    //     component:DashboardComponent
    //   }, 
    //   {
    //     path:'maps',
    //     component: MapsComponent
    //   }, 
    // ]),
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
