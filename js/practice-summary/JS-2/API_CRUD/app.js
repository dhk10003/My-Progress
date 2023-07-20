//this is just to save the url in a variable//
const url = "https://cwbarry.pythonanywhere.com/student/";

//this is what's going to get the data from the API //
async function getStudents() {
  const response = await axios.get(url);
  console.log(response);
  console.log(response.data);
  return response.data;
}

//this is the function that's going to display the student on a list - the list you'll find in the index.html file//
//we are looping through the data in order to get what we want displayed - first and last name, number and path or anything else that's available//
function displayStudents(data) {
  const ulElm = document.getElementById("student-container");
  const html = data.map(
    (item) =>
      `<li class="list-group-item">${item.number} - ${item.first_name} ${item.last_name} ${item.path}</li>`
  );

  //this bit of code is what adds the data to the DOM via innerHTML - this is what allow us to see the data on the browser//
  console.log(html);
  console.log(html.join(""));
  ulElm.innerHTML = html.join("");
}

//this is how we are getting this data - notice that we are calling the getStudents function and still using async/await because the original function is awaiting the axios API"
async function getData() {
  const data = await getStudents();
  displayStudents(data);
}

//this adds the event listener to the window open and displayed on the browser, not the entire document"
window.addEventListener("DOMContentLoaded", getData);

//this sets up the form and keeps it from refreshing when we don't want it to//
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const number = document.getElementById("number").value;
  const path = document.getElementById("path").value;

  console.log(first_name, last_name, number, path);

  //clear and reset form//

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("path").value = "";

  //send data to the API //

  addStudent(first_name, last_name, number, path);
});

async function addStudent(first_name, last_name, number, path) {
  const response = await axios({
    method: "post",
    url: url,
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  await getData();
}

//send update to the API//

async function updateStudent(id, first_name, last_name, number, path) {
  const response = await axios({
    method: "put",
    url: url + id + "/",
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  await getData();
}

document.getElementById("update").addEventListener("click", () => {
  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const number = document.getElementById("number").value;
  const path = document.getElementById("path").value;

  updateStudent(26, first_name, last_name, number, path);
});

//send delete request to the API - notice we only need an ID and not much else//

async function deleteStudent(id) {
  const response = await axios({
    method: "delete",
    url: url + id + "/",
  });
  console.log(response);
  await getData();
}

document.getElementById("delete").addEventListener("click", () => {
  deleteStudent(43);
});
