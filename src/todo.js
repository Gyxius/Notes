// The goal is to have a simple todolist

class Tasks {
    static idCounter = 0;
    constructor(name) {
        this.name = name;
        this.id = Tasks.idCounter++; 
    }
    checkTask() {

    }
    editTask() {

    }
}

class TODO {
    constructor() {
        this.tasks = [];
    }
    removeTask() {

    }
    addTask() {

    }
    editTask(){

    }
    checkTask() {

    }
}

/*
Search Button
When you type something and click on +
you will create a new task called "something"
*/
// I want the search button to be able to create a new task once you click on +
