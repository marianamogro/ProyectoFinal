import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListItemComponent } from './dashboard-list-item.component';
import { MatListModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,MatListModule
  ],
  declarations: [DashboardListItemComponent]
})
export class DashboardListItemModule { }
