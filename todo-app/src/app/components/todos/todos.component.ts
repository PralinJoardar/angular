import { Component, OnInit } from '@angular/core';
import { Todos } from '../../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}
  todos: Todos[];

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'one',
        description: 'first todo',
      },
      {
        id: 2,
        title: 'two',
        description: 'second todo',
      },
      {
        id: 3,
        title: 'third',
        description: 'third todo',
      },
    ];
  }
}
