import { environment } from './../../environments/environment';
import { UserRegisterModel } from './../models/user-register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const URL_API: string = environment.URL_API;
@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private http: HttpClient){}

  newUser(newUser: UserRegisterModel){
    return this.http.post(URL_API + 'usuario', newUser);
  }

  checkUsername(username: string){
    return this.http.get(URL_API + 'Usuario/GetUsername/' + username)
  }
}
