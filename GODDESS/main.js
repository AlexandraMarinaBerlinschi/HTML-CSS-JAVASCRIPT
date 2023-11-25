let slider = document.querySelector('.poza');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
  isDown = true;
  slider.classList.add('active');
  startX = (event).pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', (event) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', (event) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  (event).preventDefault();
  const x = (event).pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

var div = document.querySelector(".scris");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
  div.style.color = getRandomColor();
}

setInterval(changeColor, 1000);

setTimeout(function() {
  notificare = alert('Apasa tasta "C" pentru a ne contacta!');
}, 2000);

document.addEventListener('keydown', function(event) {
  if (event.key === 'c' || event.key === 'C') {
    window.location.href = './form.html'; 
  }
});