const button = document.querySelector('#first');
const container = document.querySelector('.container');

button.addEventListener('click', showImg);

function showImg() {
   container.classList.toggle('container-show');
}