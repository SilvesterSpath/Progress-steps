const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //this will be an array

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < 4) {
    currentActive++;
  }
  update();
  console.log(currentActive);
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
  }
  update();
  console.log(currentActive);
});

function update() {
  circles.forEach((element, idx) => {
    if (idx < currentActive) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
