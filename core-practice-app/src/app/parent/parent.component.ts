import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  user = [
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
      name: 'dfghjk',
    },
  ];
  data=""
  getData(value) {
    console.log(value);
    this.data = value
    console.log(this.data);
  }
  
  ngOnInit(): void {
  }
}
