import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {  RouterModule,Router, Routes } from "@angular/router";
import {ActivatedRoute} from '@angular/router';

import { User } from "../shared/model/user";
import {UserService} from "../shared/service/user.service"




@Component({
  selector: 'pf-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  user:User;
  @Input() userParam: User;// se va pasar el objeto como para y eso se hace en el dashbboard list html
  @Input() defaultPicture: string;
  @Output()  onSelect:  EventEmitter<User>=new EventEmitter<User>();
  @Output()  onSave:  EventEmitter<User>=new EventEmitter<User>();
   @Output()  onMouseEnter: EventEmitter<string>=new EventEmitter<string>();
  
  constructor(private _router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
  }
  HttpClient(user: User){
    this.onSelect.emit(user);
  }

onMouseEnterUser(user: User){
    this.onMouseEnter.emit(`Mouse enter: ${this.userParam.firstName}`);
    
  }
  

  onClick(user: User){
    
    this.onSelect.emit(user);
  }
  
  onClickEdit(user:number)
 
  { this.userService.getUser(user).subscribe(result =>{this._router.navigate(['/user', user,'edit'])});
    }

   onDelete(user:number){
      var result = confirm("Are you sure you want to delete")
      if (!result)
      return;
   this.userService.deleteUser(user).subscribe(result=> {
     console.log ('delete compete') ;
     this._router.navigate(['dashboard']); 
     //this._router.navigate(['dashboard']);
      console.log ('aca cambio') ;
       window.location.reload();
    });


   
 }
  

}


