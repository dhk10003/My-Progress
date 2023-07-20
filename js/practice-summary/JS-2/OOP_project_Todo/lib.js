// here, we'll have a data array that will hold all of our tasks:
let data = [];

// we need to create a task class.
// this class needs to have a title, a date, an ID, and a completed boolean.

export class Task {
    constructor(title) {
        this.title = title,
            this.date = new Date(),
            this.id = Date.now(),
            this.completed = false
        // 4 properties
    }

    addTask() {
        data.push(this);
        // console.log(this)
    }

    // static method:
    // static methods are methods that are called on the class itself, not on an instance of the class.
    static logTasks() {
        console.log(data);
    }

    // 2 methods, 1 of which is a static method
    // deleteTaskById
    static deleteTaskById(id) {
        console.log(id);
        // filter the data array to remove the task with the id that matches the id passed in
        data = data.filter((item) => {
            return !item.id === id
        })
    }

    // completeTaskById
    // toggleComplete
    static completeTaskById(id) {
        // find index of task in data array:
        // findIndex is a method that returns the index of the first element in the array that satisfies the condition
        const index = data.findIndex((t) => t.id == id)
        console.log(index)
        // access the data array of the index and toggle the value
        // easy boolean toggle:
        data[index].completed = !data[index].completed
        console.log(`Task of id ${id} is now completed`)
        // using a ternary operator:
        // data[index].completed = data[index].completed ? false : true 
    }
}

// ----------------- TESTING TASK CLASS -------------------
// create a task:
// let task1 = new Task("Do the dishes");
// add task to the data array:
// task1.addTask();
// console.log(typeof(task1.logTasks)) >> undefined, because logTasks is a static method, not an instance method.

// to actually log the tasks, because our logTasks method is static, we need to call it on the class itself:
// Task.logTasks()

// Task.deleteTaskById(1234);

// delete task 1:
// Task.deleteTaskById(task1.id)
// Task.logTasks()
// ----------------- TESTING TASK CLASS -------------------

export class Ui {
    static render() {
        // get a reference to the tasks div
        const tasks = document.querySelector('#tasks')

        // we need to render the status of completed, incomplete, and total task counts:

        // total tasks count:
        document.querySelector("#stats .card:nth-child(3) p").textContent = data.length

        // completed tasks count:
        document.querySelector("#stats .card:nth-child(1) p")
        .textContent = data.filter((item)=> {
            return item.completed === true
        }).length

        // incomplete tasks count:
        document.querySelector("#stats .card:nth-child(2) p")
        .textContent = data.filter((item)=> {
            return item.completed === false
        }).length

        // clear the tasks div and add a heading
        tasks.innerHTML = '<h2>Your Tasks:</h2>';

        // loop through the data array and create a div for each task
        data.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task");
            if (task.completed) div.style.background = "lightgreen";
            else {
                div.style.background = "white";
            }
            div.id = `task-${task.id}`;
            div.innerHTML = `  
                <input type="checkbox" class="check" >
                        
                <div class="task-details">
                    <h3 class="task-title"> ${task.title}</h3>
                    <small> ${task.date.toLocaleDateString("en-US")}</small>
                </div>
                <div class="actions">
                    <button><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn"><i class="fa-solid fa-trash" ></i></button>
                </div>`;
            tasks.appendChild(div);
        })
    }

    // static method to show the add card form
    static showAddCard(){
        const overlay = document.querySelector("#overlay");
        overlay.classList.add("show");
        overlay.classList.remove("hide");
    }

    // static method to hide the add card form
    static hideAddCard(){
        const overlay = document.querySelector("#overlay");
        overlay.classList.add("hide");
        overlay.classList.remove("show");
    }
}