const url = "https://icanhazdadjoke.com"
const headers = { headers: { 'Accept': 'application/json'}};

   const joke = document.getElementById('joke');
   const btn = document.getElementById('joke-btn');


      btn.addEventListener('click', () => {
       generateJoke()
      })

// i could use also axios
// function generateJoke() {
//   fetch(url, headers)
//     .then(response => response.json())
//     .then(data => { joke.innerHTML = data.joke })
//      .catch(error => {
//       console.log("error fetching",error.message);
//      })
// }


// in async mode
async function generateJoke() {
    const res = await fetch(url, headers)

    const data = await res.json()

    joke.innerHTML = data.joke
 }
