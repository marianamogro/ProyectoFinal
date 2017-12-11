import { Component, OnInit } from '@angular/core';



import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/model/user';
import { UserService } from '../shared/service/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'pf-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {
  public user;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.user = {
      "id": "",
      "firstName": "",
      "lastName": "",
      "gender": "",
      "street": "",
      "city": "",
      "pictureURL": "",
      "mail": ""

    };
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: any)=>{//susbrir a los parametros
    //   this.userService.getUser(0)//optengo el id
    //   .subscribe(user=>{//con el id me suscribo a la pelicula como tal
    //     this.user=user;        
    //   })
    // })
  }

  onCancel() {
    this.router.navigate(['dashboard']);
  }
  onSaveNew(user: User) {

    // this.userService.updateUser(user).subscribe(result=>{//ok
    console.log('Entra para insertar');
    // });
    this.userService.insertUser(user).subscribe(result => { console.log('se inserto') });



    this.router.navigate(['dashboard']);
    console.log('aca deberia actualizar');
    window.location.reload();
  }

}
