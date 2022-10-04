import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.loadLocalStorage();
  }
  newTodo(task) {
    this.todos.push(task);
    this.saveLocalStorage();
  }
  deleteTodo(id) {
    id = Number(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveLocalStorage();
  }
  toggleTodo(id) {
    id = Number(id);
    for (const todo of this.todos) {
      //console.log(id, todo.id);
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.saveLocalStorage();
        break;
      }
    }
  }
  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.loadLocalStorage();
  }
  saveLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
  loadLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    this.todos = this.todos.map(Todo.fromJSON);
  }
}
