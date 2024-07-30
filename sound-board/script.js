const sounds =['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  // creating a button for each element
  const btn = document.createElement('button')
  // adding the class to the new button
  btn.classList.add('btn')

// adding a sound
  btn.innerText = sound
  // adding an eventlistener to the button and it will play the songs
  btn.addEventListener('click', () => {
    // this stops the song once the event is triggered
    stopSongs()
    document.getElementById(sound).play()
  })
// appending the button to the buttons container
  document.getElementById("buttons").appendChild(btn)
})


// iterates over the array of the sounds and stops it
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}
