console.log('test');
const divElm = document.querySelector('div');
document.querySelector('img').addEventListener('load', () => {
  console.log('image loaded');
  divElm.style.border = '2px solid red';
});
