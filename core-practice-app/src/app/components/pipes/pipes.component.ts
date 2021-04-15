import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }
  itemName = "jellybean Soup"
  rate = 20
  date = Date.now()
  ngOnInit(): void {
  }

}
