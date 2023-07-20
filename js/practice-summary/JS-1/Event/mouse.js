// const divElm = document.querySelector('div');
// const divElm = document.querySelector('.box');
// const divElm = document.getElementsByTagName('div')[0];
const divElm = document.getElementsByClassName('box')[0];
const pElm = document.querySelector('.box p');
console.log(pElm);

// console.log(divElm);

divElm.addEventListener('click', () => {
  pElm.innerHTML = 'Single Click';
});

divElm.addEventListener('dblclick', () => {
  pElm.innerHTML = 'Double Click';
});

divElm.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  pElm.innerHTML = 'Right Click';
});

// divElm.addEventListener('mouseenter', () => {
//   pElm.innerHTML = 'Mouse in';
//   divElm.style.backgroundColor = 'yellow';
// });

divElm.addEventListener('mouseout', () => {
  pElm.innerHTML = 'Mouse out';
  divElm.style.backgroundColor = 'white';
});

divElm.addEventListener('mouseover', (e) => {
  pElm.innerHTML = 'Mouse over';
  console.log(e);
});
