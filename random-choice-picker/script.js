const tags = document.getElementById('tags');
const textArea = document.getElementById('textarea');


// this automatically focuses on textArea
textArea.focus()

function createTags(input) {
  // trims the comma, and after filters out the empty strings, and maps through to trim the whitespace
  const tagElements = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tags.innerHTML = ''

  tagElements.forEach(tag => {
    const tagElement = document.createElement('span')
    tagElement.classList.add('tag')
    tagElement.innerText = tag
    tags.appendChild(tagElement)
  })

}

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})


function randomSelect() {
  // this is the number of times the tags will be highlighted
  const times = 30

  // we are creating an interval, when the pickRandomTag will run and highlight the tag for 100ms
  const interval = setInterval(() => {
   const randomTag = pickRandomTag()

   highlightTag(randomTag)

  //  this is a timeout in the interval which after 100ms will remove the highlight class
   setTimeout(() => {
    unHighlightTag(randomTag)
   }, 100);
  }, 100)

  // this is a timeout that will clear the interval after the times * 100ms
  // and chose a random tag which will be highlighted
  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    })
  }, times * 100);

}

// this function picks a random tag
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  // it iterates over the tags and returns a random tag. it is like tags[5], tags[2], tags[3] etc
  return tags[Math.floor(Math.random() * tags.length)]
}


// these functions add and remove the highlight class
function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
