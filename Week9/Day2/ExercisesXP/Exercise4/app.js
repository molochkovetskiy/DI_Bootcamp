import TodoList from "./todo.js";

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Complete homework');

todoList.markTaskAsComplete(0);

const tasks = todoList.listTasks();
tasks.forEach((task) => console.log(task));