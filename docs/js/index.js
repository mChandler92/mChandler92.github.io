/////////////// DARK TOGGLE /////////////
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');
  const modeMessage = body.classList.contains('dark-mode') ? 'Dark' : "Light"
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

//////////////////// START FADE IN ///////////////
const items = document.querySelectorAll('.item'); //omitted 'not first child'
const options = {
  threshold: 0.5
};

function addSlideIn(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}
const observer = new IntersectionObserver(addSlideIn, options)
items.forEach(item => {
  observer.observe(item)
});
///////////////////// END FADE IN  ////////////////////////

///////////////////// START DO LIST //////////////////////////
// DOM Elements and Global Variables
const addTaskBtn = document.getElementById('add-task');
const input = document.querySelector('input');
const taskList = document.querySelector('#task-list');
let taskId = 0;
let randomImgId = 1;
// Add a new task to the list
const addTask = (task) => {
  const taskItem = document.createElement('div');
  taskItem.classList.add('form-check', 'd-flex', 'align-items-center', 'gap-3');
  taskItem.innerHTML = `
    <input class="task-check" type="checkbox" id="task-${taskId}">
    <label class="task-check-label" for="task-${taskId}">${task}</label>
    <button type="button" class="btn-close" aria-label="Close" data-task-id="${taskId}"></button>
  `;
  taskList.appendChild(taskItem);
  taskId++;
}
// Remove a task from the list
const removeTask = (taskId) => {
  const taskItem = document.querySelector(`#task-${taskId}`).parentNode;
  taskList.removeChild(taskItem);
}
// Handle Add Task button click
addTaskBtn.addEventListener('click', () => {
  const task = input.value.trim();
  const taskWithImg = `<img class="me-3" src="https://picsum.photos/50/50?random=${randomImgId}"> <span>${task}</span>`;
  if(task !== '') {
    addTask(taskWithImg);
    input.value = '';
    randomImgId++;
  }
});
// Handle completing a task and removing it from the list
taskList.addEventListener('click', (e) => {
  const target = e.target;
  if(target.matches('.task-check')) {
    const label = target.parentNode.querySelector('label');
    if(target.checked) {
      label.classList.add('text-decoration-line-through');
    } else {
      label.classList.remove('text-decoration-line-through');
    }
  } else if(target.matches('.btn-close')) {
    const taskId = target.getAttribute('data-task-id');
    removeTask(taskId);
  }
});
///////////////////// END DO LIST //////////////////////////