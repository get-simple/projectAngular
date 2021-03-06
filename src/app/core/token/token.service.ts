import { Injectable } from "@angular/core";

const KEY = 'token';

@Injectable({providedIn: 'root'})
export class TokenService{

  hasToken(){
    return !!this.getToken();
  }

  setToken(token: string){
    window.localStorage.setItem(KEY, token);
  }

  getToken(){
    return window.localStorage.getItem(KEY);
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }
}
