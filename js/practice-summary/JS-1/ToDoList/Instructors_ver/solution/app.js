//Variables
const ul = document.querySelector(".todolist-list-container"); /* ul listesi*/
const button = document.querySelector(".add-btn"); //ekleme butonu
const inputText = document.querySelector("#task"); //inputText
const form = document.querySelector("#add-task"); //form elemanı 
const deleteButton = document.querySelectorAll(".btn"); /* bütün butonları döktü */

//Functions
const createTask = (taskText) => {    
    return ` 
    <div class="list-group">
                    <li class="unchecked">
                        ${taskText}
                    </li>
                    <button class="btn">&#128473;</button>
                </div> 
    `
}

//this function calculates the Completed tasks out of all tasks
function completedTaskCount() {
    checkedCount = ul.getElementsByClassName("checked").length; //length the completed tasks
    taskCount = ul.getElementsByClassName("list-group").length; //length the all tasks
       
    const  checkedTasks = document.getElementById("checkedTasks"); //p class completed task count 
    const  allTasks = document.getElementById("allTasks"); //p class all task count 
      
    checkedTasks.innerHTML = checkedCount; //send the value to html p element
    allTasks.innerHTML = taskCount ; //send the value to html p element
}

//Events
//add task event
button.addEventListener("click", e => {  //add event listening to add buton
    e.preventDefault();  //to prevent reload page after each click

    if (inputText.value !== "") { //if input text box is not empty go alert
        ul.innerHTML += createTask(inputText.value); //get input value create a text and put it ul as li 
        form.reset() //reset input area
    } else {
        alert("please enter a task"); //if input box is empty go alert
    }
    completedTaskCount() 
})

//remove task event
ul.addEventListener("click", e => {    //add event listener to ul for delete buttons to remove elements
    if (e.target.classList.contains("btn")) { //if we target the element that have btn class  
        e.target.parentElement.remove(); //remove their parent elements
    }   
    completedTaskCount()
})

//check or unchecked the items events
ul.addEventListener("click", e => {  //add evenet listener to ul for changing check status
    if (e.target.classList.contains("unchecked")) { //if we target the element that have unchecked class name
        e.target.closest("li").className = "checked"; //change its class name to checked
    } else  {
        e.target.closest("li").className = "unchecked"; //if its name checked, change it as unchecked
    } 
    completedTaskCount()
})

