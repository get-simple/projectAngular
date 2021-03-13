import { VMessageModule } from './../shared/vmessage/vmessage.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule{}
