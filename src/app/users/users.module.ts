import { VMessageModule } from './../shared/vmessage/vmessage.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule{}
