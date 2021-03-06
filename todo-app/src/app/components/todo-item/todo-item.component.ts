import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;

  constructor() { }

  ngOnInit(): void {
  }

}
