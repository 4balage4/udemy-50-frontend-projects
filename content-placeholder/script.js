const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const name = document.getElementById('name')
const profile_img = document.getElementById('profile_img')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')


function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1743885143645-b28cdaacf8b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mens garage">'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, excepturi?'
  profile_img.innerHTML = '  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
  date.innerHTML =  'Oct 08, 2020'
  name.innerHTML = 'John Doe'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))
}




setTimeout(() => {
  getData()

}, 1000)
