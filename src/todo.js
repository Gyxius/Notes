// The goal is to have a simple todolist

class Tasks {
  static idCounter = 0;
  constructor(name) {
    this.name = name;
    this.id = Tasks.idCounter++;
    this.completed = false;
  }
  editTask(newName) {
    this.name = newName;
  }
}

class TODO {
  constructor() {
    this.tasks = [];
  }
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  addTask(task) {
    this.tasks.push(task);
  }
  editTask(taskId, newName) {
    currentTask = this.tasks.filter((task) => task.id === taskId);
    currentTask.editTask(newName);
  }
}


export {Tasks, TODO}