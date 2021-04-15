import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent implements OnInit {
  flag = false;
  data = 'Not Clicked';
  inputData = '';
  constructor() {
    setTimeout(() => {
      this.flag = true;
    }, 2000);
  }
  datachange() {
    this.data = 'Clicked';
  }
  inputHandler(event) {
    this.inputData = event.target.value;
  }
  ngOnInit(): void {}

  myData = '';
  btnFlag=false
  handleDataChange(e) {
    this.myData = e.target.value;
  }
  handleBtnClick(){
    // this.myData = ""
    this.btnFlag=true
  }
}
