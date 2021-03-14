import { TokenModel } from './../../models/token.model';
import { LoginModel } from './../../models/login.model';
import { TokenService } from './../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';

const URL_API: string = environment.URL_API;

@Injectable({providedIn: 'root'})
export class AuthService{

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ){}

  autenticate(loginModel: LoginModel){
    return this.http
      .post(URL_API + 'login',
        loginModel,
        {observe: 'response'})
        .pipe(tap(res => {
          var authToken = JSON.stringify(res.body);
          var token: TokenModel = JSON.parse(authToken);
          this.tokenService.setToken(token.jwtToken);
        }));
  }
}
