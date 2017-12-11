import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'pf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formu: any={};
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onLogin(username,password){
    if(username.value =="test" && password.value=="test"){
      
      this._router.navigate(['dashboard']);             
    }
    else
      {
        console.log("Usuario o pass incorrectos");
      }
  }

}
