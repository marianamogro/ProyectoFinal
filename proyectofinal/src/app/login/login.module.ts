import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';





import {MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
