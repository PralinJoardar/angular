import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup-form',
  templateUrl: './user-signup-form.component.html',
  styleUrls: ['./user-signup-form.component.scss'],
})
export class UserSignupFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  error = true
  color="red"
  handleSubmit(values) {
    console.log(values);
  }
  changeErrorStatus(){
    this.error=!this.error
  }
}
