import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string, dueDate: Date): void {
    this.todos.push({ id: this.nextId++, title, completed: false, dueDate });
  }

  toggleTodoCompletion(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}