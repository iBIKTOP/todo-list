import { Injectable } from '@angular/core';
import {Todo} from './todo-list/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoJSON: string;
  constructor() { }
  todos: Todo[] = [
    {id: 1, name: 'Купить продукты', done: false},
    {id: 2, name: 'Выполнить домашнее задание', done: true},
    {id: 3, name: 'Сделать работу по дому', done: false}
  ];
  private saveInLocalStorage(): void {
    this.todoJSON = JSON.stringify(this.todos);
    localStorage.setItem('todoDataBase', this.todoJSON);
  }
  getTodos(): Todo[] {
    return this.todos = JSON.parse(localStorage.getItem('todoDataBase'));
  }
  addNewTodo(i: number, newTodo: string): void {
    if (i === null && newTodo !== '') {
      this.todos.push({id: Date.now(), name: newTodo, done: false});
      this.saveInLocalStorage();
    } else if (i !== null && newTodo !== '') {
      this.todos[i].name = newTodo;
    }
    this.saveInLocalStorage();
  }
  toggleDone(todo): void {
    todo.done = !todo.done;
    this.saveInLocalStorage();
  }
  removeTodo(i): void {
    this.todos.splice(i,1);
    this.saveInLocalStorage();
  }
}
