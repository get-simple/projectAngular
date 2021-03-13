
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule{}
