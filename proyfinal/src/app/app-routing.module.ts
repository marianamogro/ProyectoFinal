import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {DashboardEditComponent} from "./dashboard-edit/dashboard-edit.component"
import { DashboardNewComponent } from "./dashboard-new/dashboard-new.component";
import { DashboardFailComponent } from "./dashboard-fail/dashboard-fail.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user/:id/edit',
    component: DashboardEditComponent//generar relacionada con app
  },
  {
    path: 'user/new',
    component: DashboardNewComponent//generar relacionada con app
  },
  {
    path: '**',
    component: DashboardFailComponent//generar relacionada con app
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
