function hello() {
  // alert('Button 2 is clicked');
  console.log('Message from hello function');
}

// event handlers
function func1(event) {
  console.log('message from function1');

  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.tagName);
  event.target.textContent = 'Button Clicked';
}

function func2() {
  console.log('message from function2');
  btn.removeEventListener('click', func2);
}
function func3() {
  console.log('message from function3');
  btn.removeEventListener('click', func3);
}

const btn = document.getElementById('btn');
// console.log(btn);
// in this syntax you can have only one function for an event
// btn.onclick = hello;
// btn.onclick = func1;

// in this syntax we can attach many functions for the same event
btn.addEventListener('click', func1);
// btn.addEventListener('click', func2);
// btn.addEventListener('click', func3);
