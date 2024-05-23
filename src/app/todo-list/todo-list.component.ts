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
  newTodoDueDate: string; // Change type to string for yyyy-MM-dd format
  editingTodo: Todo | null = null; // Track the todo being edited

  constructor(
    private todoService: TodoService,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('en-gb'); // Use the 'en-gb' locale

    // Set newTodoDueDate to today's date in yyyy-MM-dd format
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based month
    const day = ('0' + today.getDate()).slice(-2);
    this.newTodoDueDate = `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(
        this.newTodoTitle,
        new Date(this.newTodoDueDate)
      );
      this.newTodoTitle = '';

      // Reset newTodoDueDate to today's date in yyyy-MM-dd format
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      this.newTodoDueDate = `${year}-${month}-${day}`;

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
