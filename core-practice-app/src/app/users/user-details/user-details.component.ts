import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  data = ['xyz','abc','pqr','mno']
  myData = [
    {
      id:1,
      name:'xyz'
    },
    {
      id:2,
      name:'abc'
    },
    {
      id:3,
      name:'pqr'
    },{
      id:4,
      name:'mno'
    }
  ]

  ngOnInit(): void {
  }

}
