import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  newTodoDueDate: Date;
  editingTodo: Todo | null = null;

  constructor(
    private todoService: TodoService,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('en-gb');
    this.newTodoDueDate = new Date();
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle, this.newTodoDueDate);
      this.newTodoTitle = '';
      this.newTodoDueDate = new Date(); // Reset to today's date after adding a todo
      this.todos = this.todoService.getTodos();
    }
  }

  toggleTodoCompletion(todo: Todo): void {
    this.todoService.toggleTodoCompletion(todo.id);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
    this.todos = this.todoService.getTodos();
  }
}
