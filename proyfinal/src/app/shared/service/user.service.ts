import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import { User } from "../model/user";

const User_Api ='http://localhost:3200/users';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }
 getUsers(): Observable<any> {
    return this.httpClient.get(`${User_Api}`);//&api_key=${API_KEY}
  }
}
