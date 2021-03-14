import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-z0-9_\-]+$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
}
