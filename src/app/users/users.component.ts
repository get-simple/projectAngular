import { UserValidatorService } from './users.validator.service';
import { UserRegisterModel } from './../models/user-register.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private userValidatorService: UserValidatorService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-]+$/)], this.userValidatorService.checkUsernameTaken()],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  registerNewUser(): void{
    const userRegisterModel: UserRegisterModel = {
      login: this.userForm.get('login').value,
      password: this.userForm.get('password').value,
      confirmPassword: this.userForm.get('confirmPassword').value
    };

    this.usersService.newUser(userRegisterModel).subscribe(
      user =>{
        console.log(user);

      },
      error =>{
        console.log(error);

      }
    )
  }
}
