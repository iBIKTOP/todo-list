import { Injectable } from "@angular/core";
import { Todo } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}
  todos: Todo[] = [];
  private saveInLocalStorage() {
    localStorage.setItem("todoDataBase", JSON.stringify(this.todos));
  }
  getTodos() {
    if (JSON.parse(localStorage.getItem("todoDataBase")) === null) {
      this.saveInLocalStorage();
    }
    this.todos = JSON.parse(localStorage.getItem("todoDataBase"));
    return this.todos;
  }
  addNewTodo(i: number, newTodo: string) {
    if (i === null && newTodo !== "") {
      this.todos.push({ id: Date.now(), name: newTodo, done: false });
      console.log(this.todos);
    } else if (i !== null && newTodo !== "") {
      this.todos[i].name = newTodo;
    }
    this.saveInLocalStorage();
  }
  toggleDone(todo): void {
    todo.done = !todo.done;
    this.saveInLocalStorage();
  }
  removeTodo(i): void {
    this.todos.splice(i, 1);
    this.saveInLocalStorage();
  }
}
