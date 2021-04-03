const button = document.querySelector('.show');
const btnMix = document.querySelector('.mix');
const container = document.querySelector('.container');

function showImg() {
   container.classList.toggle('container-show');
   btnMix.classList.toggle('mix-show');
   if (button.innerHTML === 'Show pictures') {
      button.innerHTML = 'Hide pictures';
   } else {
      button.innerHTML = 'Show pictures';
   }
}

button.addEventListener('click', showImg);

function mixImg() {
   const img1 = document.querySelector('#img1');
   const img2 = document.querySelector('#img2');
   const img3 = document.querySelector('#img3');
   const img4 = document.querySelector('#img4');
   const img5 = document.querySelector('#img5');
   const img6 = document.querySelector('#img6');
   const images = [img1, img2, img3, img4, img5, img6];
   for (let i = 0; i < images.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
      [images[i].src, images[j].src] = [images[j].src, images[i].src];
   }
}

btnMix.addEventListener('click', mixImg);


