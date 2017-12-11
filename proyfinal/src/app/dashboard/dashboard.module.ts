import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DashboardComponent } from './dashboard.component';
import { DashboardComponent } from "./dashboard.component";
import { UserService} from '../shared/service/user.service'
import {HttpClientModule} from '@angular/common/http';
import { MatListModule } from "@angular/material";
import { DashboardListComponent } from '../dashboard-list/dashboard-list.component';

import {ActivatedRoute, Router} from '@angular/router';





@NgModule({
  imports: [
    CommonModule,HttpClientModule,MatListModule
  ],
  declarations: [DashboardComponent, DashboardListComponent],
  providers:[UserService]
})
export class DashboardModule { }


