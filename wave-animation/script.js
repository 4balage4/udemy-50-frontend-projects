const labels = document.querySelectorAll('.form-control label')


console.log(labels)

labels.forEach((label) => {
  console.log(label.innerHTML, label.innerText)
  label.innerHTML = label.innerText
    .split('')
    .map((letter, i) => `<span style="transition-delay:${i*50}ms">${letter}</span>`)
    .join('')
  })

  // In this function
  // We iterate over the labels, and each 'label' we look into:
  //  we split it to an array of separate => ['h', 'e', 'l', 'l', 'o' ]
  // we map it over and we get back an array of: ['<span>h </span>',  '<span>e </span>', '<span>l </span>', '<span>l </span>', '<span>o </span>']
  // we join the array so we will have only
