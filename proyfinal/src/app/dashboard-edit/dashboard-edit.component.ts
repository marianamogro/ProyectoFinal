import { Component, OnInit } from '@angular/core';


import {ActivatedRoute} from '@angular/router';
import {User} from '../shared/model/user';
import {UserService} from '../shared/service/user.service';
import { Router } from "@angular/router";



@Component({
  selector: 'pf-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {
  user: User;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any)=>{//susbrir a los parametros
      this.userService.getUser(params.id)//optengo el id
      .subscribe(user=>{//con el id me suscribo a la pelicula como tal
        this.user=user;        
      })
    })
     console.log('carga Done')
  }



  onSave(user:User){
    
    this.userService.updateUser(user).subscribe(result=>{//ok
    console.log('Update Done',result)
    });
 
  
   
    this.router.navigate(['dashboard']);
    console.log('aca deberia actualizar');
     window.location.reload();
  }

  
}
