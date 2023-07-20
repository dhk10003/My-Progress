import {Ui,Task} from "./lib.js";

const addBtn = document.querySelector(".container>button")
// the following selector will select buttons that have a type attribute with a value of reset
const cancelBtn = document.querySelector('#addCard button[type="reset"]')

addBtn.addEventListener(
    'click',
    Ui.showAddCard
)

cancelBtn.addEventListener('click', Ui.hideAddCard)

const form = document.querySelector('form')

form.addEventListener('submit', addTask)

function addTask(e){
    e.preventDefault()
    const taskInput = document.querySelector('#addCard input')
    console.log(taskInput.value)
    
    // create a new task object
    const task = new Task(taskInput.value)

    // add task to the data array
    task.addTask()
    // clear input
    taskInput.value = ""
    // hide the overlay
    Ui.hideAddCard()
    // render tasks
    Ui.render()
}

// delete tasks:
// add an event listener to the entire document
// if the target has a class of delete-btn, we will delete the task
document.addEventListener('click',(e)=>{
    if (e.target.classList.contains("delete-btn")) {
        console.log(e.target)

    // now we need to traverse the dom to get the ID of the task
    // to get a reference to the element we want to delete, 
    // we need to go to the parent of this element, then the parent of that element.  
    // This will give us the task div
    const taskDivId = e.target.parentElement.parentElement.id.split('-')[1]
    console.log(`ID: ${taskDivId}`)
    // working!
    
        // and call our STATIC deleteTaskById method
        Task.deleteTaskById(taskDivId)
        // then, we need to re-render the tasks.
        
        Ui.render()
    }
    
})

document.addEventListener('change', (e)=>{
    if(e.target.className.includes('check')){
        const id = e.target.parentElement.id.split('-')[1]
        console.log(id)
        e.target.checked = true;
        Task.completeTaskById(id)
        Ui.render()
    }
})