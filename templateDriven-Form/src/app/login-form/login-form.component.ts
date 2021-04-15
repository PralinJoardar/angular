import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}
  formData={
    email:"",
    password:"123456",
    address:""
  }
  ngOnInit(): void {}
  email = '';
  submitLogin(values) {
    console.log(values);
    this.email = values.email;
  }
}
