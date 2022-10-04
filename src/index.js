import { Todo, TodoList } from "./classes";
import { createTodoHtml } from "./js/components.js";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);

const newTodo = new Todo("learn js");
todoList.todos[0].printClass();
console.log("todos", todoList.todos);
