import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newText = "";
  bool: boolean;
  i: number = null;
  isFocus(): void {
    this.bool = true;
  }
  noFocus(): void {
    this.newText !== "" ? (this.bool = true) : (this.bool = false);
  }
  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }
  saveTodo(): void {
    this.todoService.addNewTodo(this.i, this.newText);
    this.newText = "";
    this.noFocus();
  }
  getToggleDone(todo): void {
    this.todoService.toggleDone(todo);
  }
  getEditTodo(i, todo) {
    this.i = i;
    this.newText = todo.name;
    this.bool = true;
  }
  getRemoveTodo(i) {
    this.todoService.removeTodo(i);
  }
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.getTodos();
  }
}
