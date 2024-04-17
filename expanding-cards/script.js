
// const clickedElement = document.body.addEventListener("click", clickHandler)

// function clickHandler(event) {
//   const activeClass = document.getElementsByClassName("active")[0]
//   console.log(event.target)
//   const newActive = event.target
//   console.log(activeClass.classList)
//   if (newActive.classList[1] != 'active') {
//     activeClass.classList.remove('active');
//     newActive.classList.add('active');
//   }

// }
// the above one has an extra look, when we click outside of the container, the active class will be on the outside. Here it is not a problem, but
// in bigger projects could cause problems or unexpected behaviour



// other solution

const panels = document.querySelectorAll('.panel');

console.log(panels)

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(panels)
    panel.classList.add('active')
  })
})

function removeActiveClasses(arr) {
  arr.forEach((item) => {
    item.classList.remove('active')
  })
}
