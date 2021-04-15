import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../userdata.service';
import { UserApiDataService } from '../../user-api-data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  data;
  userData;
  constructor(
    private myData: UserdataService,
    private users: UserApiDataService
  ) {
    this.data = myData.data();
    console.log(this.data);
    this.users.getData().subscribe((data) => {
      console.log(data);
      this.userData = data
    });
  }

  ngOnInit(): void {}
}
