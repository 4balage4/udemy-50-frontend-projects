const toasts = document.querySelector(".toasts")
const btn = document.getElementById('button')

console.log(toasts)

console.log(btn)

const messages = [
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5"
]


btn.addEventListener('click', () => createNotification())


function createNotification(type= null) {
  const notification = document.createElement('div')
  type && notification.classList.add(type)

  notification.classList.add('toast')
  notification.innerText = messages[getRandomMessage()]
  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 2000)
}

function getRandomMessage() {
  return Math.floor(Math.random()*messages.length)
}
