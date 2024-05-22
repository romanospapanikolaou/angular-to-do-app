import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos(); // Ensure the list is updated
    }
  }

  toggleTodoCompletion(todo: Todo): void {
    this.todoService.toggleTodoCompletion(todo.id);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
    this.todos = this.todoService.getTodos(); // Ensure the list is updated
  }
}
