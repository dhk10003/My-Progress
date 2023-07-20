const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');

  const labelElm = document.querySelector('label');
  console.log(labelElm.innerHTML);

  const emailElm = document.getElementById('exampleInputEmail1');

  console.log(emailElm.value);

  const passElm = document.getElementById('exampleInputPassword1');
  console.log(passElm.value);

  // after colecting the input data send it to API

  // form reset
  emailElm.value = '';
  passElm.value = '';
});

const emailElm = document.getElementById('exampleInputEmail1');

// emailElm.addEventListener('keypress', () => {
//   console.log('keypressed');
// });

// emailElm.addEventListener('keydown', () => {
//   console.log('keydown');
// });

emailElm.addEventListener('keyup', (e) => {
  console.log('keyup');
  console.log(e);
  // ASCII codes
  console.log(e.keyCode);
  // content
  console.log(e.key);
  if (e.key === 'a') {
    console.log('a is pressed');
  }
});
