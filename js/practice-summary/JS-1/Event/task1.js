const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  if (e.target.textContent === 'ON') {
    e.target.textContent = 'OFF';
    e.target.style.color = 'red';
    e.target.style.backgroundColor = 'blue';
  } else {
    e.target.textContent = 'ON';
    e.target.style.color = 'blue';
    e.target.style.backgroundColor = 'red';
  }
});
