import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserService} from '../shared/service/user.service'
import {HttpClientModule} from '@angular/common/http';
import { MatListModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,HttpClientModule,MatListModule
  ],
  declarations: [DashboardComponent],
  providers:[UserService]
})
export class DashboardModule { }
