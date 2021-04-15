import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() data;
  @Output() getMyData: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.data);
  }
  obj = [
    {
      id: 1,
      name: 'qwerty',
    },
    {
      id: 2,
      name: 'uiopas',
    },
    {
      id: 3,
      name: 'zxcvbn',
    },
  ];
  sendData() {
    this.getMyData.emit(this.obj);
  }
}
