document.getElementById('btn').addEventListener('click', (e) => {
  console.log('Button is clicked!');
  e.stopPropagation();
});
document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner div is clicked!');
});

document.getElementById('outer').addEventListener(
  'click',
  (e) => {
    console.log('Outer div is clicked!');
    // e.stopPropagation();
  },
  true // attach eventhandler to capturing phase
);

document.getElementById('footer').addEventListener('click', () => {
  console.log('Footer div is clicked!');
});

document.body.addEventListener('click', () => {
  console.log('Body is clicked!');
});
