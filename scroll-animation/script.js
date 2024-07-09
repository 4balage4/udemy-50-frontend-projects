const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// can be anything, image, section anything

checkBoxes()

function checkBoxes() {


  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < window.innerHeight / 5 * 4) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

/*
We add / remove the show class from the boxes once it is reached a specific point on the innerHeight.
The
window.innerHeight / 5 * 4 looks like it is a general thumb rule for the low point of the screen.


getBoundingClientRect - what is this?
this method returns a domRect object providing info about the size of the element and its position relative to viewport
DomRect object isjust a rectangle which describes the size and position of rectangle
So we want to see where the .top is that perticular box is.

If the top of the box is less then the trigger point, then we add the show class on it. If it is more than we don't want to see it (we can;t because it is not on the screen)
so we dont need the show class on it.


*/
