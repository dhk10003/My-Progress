// set up variables!
// input text reference
const input = document.querySelector("#task")

// button to submit input to list reference
const btn = document.querySelector('#addTextButton')

// form reference
const form = document.querySelector("#add-task")

// ul reference
const ul = document.querySelector('#listContainer')

// delete buttons refernce [array]
let deleteButton = document.querySelectorAll(".btn")
//THIS WILL BE EMPTY TO START

// functions:
// function to create a task that takes the input value as an argument:
const addTask = function(text) {
    // append an li to the ul
    ul.innerHTML +=
        `<div class="listGroup">
            <!-- classes for li: checked/unchecked -->
            <li class="unchecked">${text}</li>
            <button class="btn">&#128473;</button>
        </div>`

        // this was the bad function that needed to be called
        // every time we added a new task (so it could update it's references):
        // setUpDeleteEventListeners()

        // reset the form:
        form.reset();
}

// function to calculate number of tasks completed
function completedTaskCount(){
    console.log("reevaluation of completed tasks")
    let checkedCount = ul.getElementsByClassName("checked").length
    let totalTasks = ul.getElementsByClassName("listGroup").length

    // get references to the spans in the footer:
    const completed = document.querySelector("#completed")
    const total = document.querySelector("#total")

    completed.innerText = checkedCount;
    total.innerText = totalTasks;
}

// Events:
btn.addEventListener("click", (e)=> {
    e.preventDefault()
    if(input.value!==""){
        addTask(input.value)
    }else{
        alert("Please enter a task!")
    }
    completedTaskCount()
    console.log(deleteButton)
})

// toggle checked/unchecked
ul.addEventListener("click", (e)=> {
    console.log(e.target)
    if(e.target.classList.contains("unchecked")){
        e.target.classList.replace("unchecked", "checked")
    }else{
        e.target.classList.replace("checked", "unchecked")
    }

    // delete task:
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove()
    }
    completedTaskCount()
})

// set up event listeners with a loop:
// function setUpDeleteEventListeners(){
//     deleteButton = document.querySelectorAll(".btn")
//     deleteButton.forEach((button)=> {
//         button.addEventListener("click", (e)=> {
//             e.target.parentElement.remove()
//             completedTaskCount()
//         })
//     })
// }

// loop that fires 30 times a second:
// setInterval(completedTaskCount, 1000/30);