const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');


// this is gonna me an index, which one should be marked
let currentActive = 1;


const progressActive = 100 / (circles.length - 1)

// progress should be updated by


// when next clicked it adds one active class to the next circle and adds 25% to the progress width.
// when prev clicked it removes the prev active class from the circle and

next.addEventListener('click', add)
prev.addEventListener('click',decrement)

function add() {
  currentActive++;

  prev.disabled = false;
  if (currentActive > circles.length - 1) {
    currentActive = circles.length
    next.disabled = true
  }
  update()

}


function decrement() {
  currentActive--;
  if (currentActive <= 1) {
    currentActive = 1
    prev.disabled = true
  }
  if (currentActive < circles.length) {
    next.disabled = false;
  }
  update()
}

function update() {
  progress.style.width = (currentActive - 1) * progressActive + '%'
  circles.forEach((circle, i) => {
    if(i < currentActive) {
      circle.classList.add('active')

    } else {
      circle.classList.remove('active')
    }
  })
}
