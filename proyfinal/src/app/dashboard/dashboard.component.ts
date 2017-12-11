import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from "../shared/model/user";
import { Router } from "@angular/router";
import { UserService } from "../shared/service/user.service";

@Component({
  selector: 'pf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {  
  users: User[];
  constructor(private    router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService)
              { }

  ngOnInit() {
     console.log('antes');
    this.userService.getUsers().subscribe((data)=>{ this.users = data; })
    

     console.log('resolution');

    //  this.activatedRoute.params.subscribe((params: any )=>{
    //    this.userService.getUser(params.id).subscribe(user=>{})
    //  })

    //***this.activatedRoute.params.subscribe((params: any)=>{//susbrir a los parametros
    //***  this.userService.getUser(params.id)//optengo el id
    //*** .subscribe(users=>{//con el id me suscribo a la pelicula como tal
       // this.movie.pictureURL='https://image.tmdb.org/t/p/w160'+movie['poster_path'];
        
      //})
    //})
  }

onSelectUser(user: User): void {
    console.log('mostrar detalle ', user)
    //esto se ve en ctrl i 
    // dedire t /movie/{{movie.id}}
    this.router.navigate(['dashboard'])   
    console.log('cambio detalle ', user)

  }
    onNew(){
    console.log ('regreso complete') ;
     this.router.navigate(['user/new']); 
      console.log ('aca volvi') ;
      

  }


}