import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';
import { ChildComponent } from './child/child.component'


@NgModule({
  declarations: [
    LoginComponent,
    UserDetailsComponent,
    UserSignupFormComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    UserDetailsComponent,
    UserSignupFormComponent,
    ChildComponent
  ]
})
export class UsersModule { }
