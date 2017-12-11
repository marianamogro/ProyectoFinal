import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    //,
    //MatButtonModule, MatCheckboxModule,MatInputModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
