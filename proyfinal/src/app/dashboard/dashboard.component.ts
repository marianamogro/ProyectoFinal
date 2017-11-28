import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from "../shared/model/user";
import { Router } from "@angular/router";
import { UserService } from "../shared/service/user.service";

//import { MatListModule } from "@angular/material";
@Component({
  selector: 'pf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()// se va pasar el objeto como para y eso se hace en el movielistcomponent html
  userParam: User;
  users: User[];
  constructor(private router: Router
    , private userService: UserService
  ) { }

  ngOnInit() {
    console.log('antes');
    this.userService.getUsers().subscribe((data) => { this.users = data; })

    console.log('resolution');

  }

}
