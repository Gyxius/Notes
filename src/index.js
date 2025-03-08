import "./styles.css";
import { Tasks, TODO } from "./todo.js";

class TodoController {
  constructor(todoModel, todoView) {
    this.todo = todoModel;
    this.view = todoView;
  }
  removeTask(taskId) {
    this.todo.removeTask(taskId);
  }
  addTask(taskName) {
    const newTask = new Tasks(taskName);
    this.todo.addTask(newTask);
  }
  editTask(taskId, newName) {
    this.todo.editTask(taskId, newName);
  }
  updateView() {
    this.view.renderConsole(this.todo.tasks);
  }
}

class TodoView {
  removeTask(taskId) {}
  renderConsole(tasks) {
    tasks.forEach((task) => console.log(task.name));
  }
}

class App {
  constructor() {
    console.log("Test!");
    this.initToDo();
  }
  initToDo() {
    const toDoModel = new TODO();
    const toDoView = new TodoView();
    this.toDoController = new TodoController(toDoModel, toDoView);
  }
  createTasks() {
    this.toDoController.addTask("John");
    this.toDoController.updateView();
  }
}

const myApp = new App();
myApp.createTasks();