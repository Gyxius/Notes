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
    this.view.renderTasksToBody(this.todo.tasks); 
  }
  addTask(taskName) {
    const newTask = new Tasks(taskName);
    this.todo.addTask(newTask);
  }
  editTask(taskId, newName) {
    this.todo.editTask(taskId, newName);
    this.view.renderTasksToBody(this.todo.tasks); 
  }
  updateView() {
    this.view.renderTasksToConsole(this.todo.tasks);
    this.view.renderTasksToBody(this.todo.tasks);
  }

}

class TodoView {
  renderTasksToConsole(tasks) {
    tasks.forEach((task) => console.log(task.name));
  }
  renderTasksToBody(tasks) {
    const todoDiv = document.getElementById("todo");
    todoDiv.innerHTML = "";
    tasks.forEach((task) => {
      let taskDiv = document.createElement("div");
      taskDiv.className = "tasksDiv";
  
      let iconsDiv = document.createElement("div");
      iconsDiv.className = "iconsDiv";
  
      // Create Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.name = task.name;
      checkbox.checked = true;
  
      // Create Label
      const label = document.createElement("label");
      label.htmlFor = task.name;
      label.textContent = task.name;
      label.style.width = "100px";
  
      // Create Edit and Delete Icons
      const editIcon = document.createElement("img");
      const deleteIcon = document.createElement("img");
  
      editIcon.src = edit_icon;
      deleteIcon.src = delete_icon;
      editIcon.style.height = "20px";
      deleteIcon.style.height = "20px";

      // Attach Click Event Handlers
      editIcon.addEventListener("click", () => this.handleEditClick(task.id));
      deleteIcon.addEventListener("click", () => this.handleDeleteClick(task.id));
  
      // Append icons to iconsDiv
      iconsDiv.appendChild(editIcon);
      iconsDiv.appendChild(deleteIcon);
  
      // Append checkbox, label, and iconsDiv to taskDiv
      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(label);
      taskDiv.appendChild(iconsDiv);
  
      // Append taskDiv to todoDiv
      todoDiv.appendChild(taskDiv);
    });
  }
  setEventHandlers(controller) {
    this.handleEditClick = (taskId) => controller.editTask(taskId);
    this.handleDeleteClick = (taskId) => controller.removeTask(taskId);
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
    toDoView.setEventHandlers(this.toDoController);
  }
  createTasks() {
    this.toDoController.addTask("John");
    this.toDoController.addTask("Bob");
    this.toDoController.updateView();
  }
}

const myApp = new App();
myApp.createTasks();

