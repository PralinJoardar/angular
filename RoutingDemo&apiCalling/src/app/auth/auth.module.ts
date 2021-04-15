import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    AdminComponent
  ]
})
export class AuthModule { }
