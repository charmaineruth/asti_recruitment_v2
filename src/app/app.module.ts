import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { ListOfApplicantComponent } from './list-of-applicant/list-of-applicant.component';
import { ValidatorDirective } from './validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DashboardComponent,
    SideBarComponent,
    CreateApplicantComponent,
    ListOfApplicantComponent,
    ValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create-applicant',
        component: CreateApplicantComponent
      },
      {
        path: 'list-of-applicant',
        component: ListOfApplicantComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
