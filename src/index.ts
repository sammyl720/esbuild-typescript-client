console.log('hello');

document.addEventListener('DOMContentLoaded', (e) => {

  const div = document.createElement('div');
  div.innerText = 'loaded js';

  document.body.appendChild(div);
})