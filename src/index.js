import "./styles.css";
import { Tasks, TODO } from "./todo.js";
import edit_icon from "./assets/icons/edit_icon.png";
import delete_icon from "./assets/icons/delete_icon.png";

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
    this.view.renderTasksToConsole(this.todo.tasks);
    this.view.renderTasksToBody(this.todo.tasks);
  }
}

class TodoView {
  removeTask(taskId) {}
  renderTasksToConsole(tasks) {
    tasks.forEach((task) => console.log(task.name));
  }
  renderTasksToBody(tasks) {
    const todoDiv = document.getElementById("todo");
    tasks.forEach((task) => {
      let taskDiv = document.createElement("div");
      taskDiv.innerHTML = 
      `
        <div>
            <input type="checkbox" id="${task.id}" name="${task.name}" checked />
            <label for="${task.name}">${task.name}</label>
        </div>
      `;
      todoDiv.appendChild(taskDiv);
    });
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
    this.toDoController.addTask("Bob");
    this.toDoController.updateView();
  }
}

const myApp = new App();
myApp.createTasks();

const todoDiv = document.getElementById("todo");

// Add icons

const editImg = document.createElement("img");
const deleteImg = document.createElement("img");
editImg.src = edit_icon;
deleteImg.src = delete_icon;
editImg.style.height = "20px";
deleteImg.style.height = "20px";
todoDiv.appendChild(editImg);
todoDiv.appendChild(deleteImg);
