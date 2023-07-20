const allLis = document.querySelectorAll('li');

console.log(allLis);

// for (let item of allLis) {
//   item.addEventListener('click', (e) => {
//     console.log(e.target.textContent);
//   });
// }

const todosElm = document.getElementById('todos');

todos.addEventListener('click', (e) => {
  // console.log(e.target.textContent);
  console.log(e.target.tagName);
  console.log(e.currentTarget);
  console.log(e.target);

  if (e.target.tagName === 'SPAN') {
    console.log('time to delete');
    e.target.parentElement.remove();
  }

  if (e.target.tagName === 'LI') {
    console.log('time to toggle task status');
    // e.target.innerHTML = e.target.textContent.strike();
    if (e.target.style.textDecoration === 'line-through') {
      e.target.style.textDecoration = 'none';
    } else {
      e.target.style.textDecoration = 'line-through';
    }
  }

  if (e.target.classList.contains('test')) {
    console.log('This should be Task-1');
  }
});
