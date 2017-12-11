import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import { User } from "../model/user";

const User_Api ='http://localhost:3000/users';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }
 getUsers(): Observable<any> {
    return this.httpClient.get(`${User_Api}`);//&api_key=${API_KEY}
  }
  getUser(ID: number ): Observable<any> {
   return this.httpClient.get(`
    ${User_Api}/${ID}`);//?api_key=${API_KEY}
  }  
    deleteUser(ID: number | string ): Observable<any> {//puede ser el parametro de dos modos
   return this.httpClient.delete(`
    ${User_Api}/${ID}`);
  } 
  updateUser(user: User):Observable<User>{
    return this.httpClient.put<User>(`${User_Api}/${user.id}`,user);// en el put pongo 
  }
  insertUser(user:User):Observable<User>{
    return this.httpClient.post<User>(`${User_Api}`,{firstName: user.firstName,
                                                     lastName: user.lastName,
                                                     gender: user.gender,
                                                     street: user.street,
                                                     city: user.city,
                                                     pictureURL: user.pictureURL,
                                                     email: user.email});
  }
  
}
