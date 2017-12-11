import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule }   from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { DashboardFailComponent } from './dashboard-fail/dashboard-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardEditComponent,
    DashboardNewComponent,
    DashboardFailComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
