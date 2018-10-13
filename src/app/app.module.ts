import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "todoList",
    pathMatch: "full"
  },
  {
    path: "todoList",
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
