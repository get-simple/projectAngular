import { AbstractControl } from '@angular/forms';
import { UsersService } from './users.service';
import { Injectable } from "@angular/core";
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserValidatorService{
  constructor(private userService: UsersService){}

  checkUsernameTaken(){
    return (control: AbstractControl) =>{
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((username) => this.userService.checkUsername(username)))
        .pipe(map((isTaken) => (isTaken ? {usernameTaken: true} : null)))
        .pipe(first());
    };
  }
}
