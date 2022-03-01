// ELEMENTS
// always start by getting our elements
const redButton = document.getElementById('red')
const yellowButton = document.getElementById('yellow')
const greenButton = document.getElementById('green')
const resultElement = document.querySelector('p#result')

console.log('red', redButton)
console.log('yellow', yellowButton)
console.log('green', greenButton)

// EFFECT (side effect/function/thing we want to happen)
const changeText = (newText) => {
  // 2. set the text content of that element to 'red'
  resultElement.textContent = newText
}

// EVENT - add event listener
redButton.addEventListener('click', () => changeText('red'))
greenButton.addEventListener('click', () => changeText('green'))
yellowButton.addEventListener('click', () => changeText('yellow'))

// Let's go crazy and attach an event listener to everything
document.addEventListener('click', function (event) {
  changeText(event.target.textContent)
})
