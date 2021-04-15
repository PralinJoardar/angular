import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  inp3data = '';
  hoverEvent() {
    // alert("on hover");
    console.log('on hover');
  }
  onInput(value) {
    console.log(value);
  }
  displayvalue = '';
  inp2val(value) {
    console.log(value);
    this.displayvalue = value;
  }

  inp3display() {
    console.log(this.inp3data);
  }
  flag=false

  color = ""
  setColor = ""
  setColorM(){
    this.setColor=this.color
  }
  // enterColor(color){
  //   this.color=color
  // }
}
