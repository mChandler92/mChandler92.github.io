/////////////// DARK TOGGLE /////////////

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode')
  ? 'Dark' : "Light"

  modeStatus.innerText = modeMessage;
};

modeToggle.addEventListener('click', toggleMode);

///////////// IMAGE SLIDER ///////////////
/*
const images = document.querySelectorAll('#slider div');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});
*/

//////////////////// FADE IN ///////////////
const items = document.querySelectorAll('.item:not(:first-child)'); //omitted 'not first child'


const options = {
  threshold: 0.1
};

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item)
});

///////////////////// END FADE IN  ////////////////////////