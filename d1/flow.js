// Conditional

const isTodayMonday = true
const isItSnowing = true

if (isTodayMonday) {
  console.log('How was your weekend?')
}

if (isItSnowing) {
  console.log("Let's build a snowman!")
} else {
  console.log('No snowmen today!')
}

// We call these "if-else" blocks

// if (condition) {
//   ...statements to run when the condition is true
// }
if (isItSnowing) {
  console.log('SNOW')
} else if (isTodayMonday) {
  console.log('MONDAY')
} else {
  console.log('NEITHER')
}

const dayOfWeek = 'Monday'

switch (dayOfWeek) {
  case 'Monday':
    console.log('It is very early!')
  case 'Tuesday':
    console.log('There are at least four more days of class this week, yay!')
    break
  case 'Wednesday':
    console.log('halfway')
    break
  default:
    // like the else in an if-else block
    console.log('oh no it is not early in the week now')
    break
}

// Loops

// for-loop
// for (initialiser; continue condition; incrementer)
for (let i = 0; i < 10; i++) {
  console.log(`i is now ${i}`)
}

let someName = 'b'
// Always be sure they will exit
// the condition needs to be false eventually
while (someName.length < 50) {
  someName += 'aa'

  if (someName.length > 30) {
    break
  }
}
console.log(someName, someName.length)

let a = 0

// In do while
do {
  a++
  a++
  if (a > 20) {
    console.log('hello!')
  }
} while (a > 10)

console.log(a)

// for ... of ...
const someNames = ['Polly', 'Dave', 'Bob']

for (const name of someNames) {
  console.log(`Hello, ${name}`)
}

for (const letter of 'Robin') {
  console.log(letter)
}

const myClass = {
  javascript: true,
  html: true,
  css: true,
  rust: false,
}

for (const key in myClass) {
  console.log(key)
}

// 'continue' keyword

let i = 0

while (i < 5) {
  i++
  if (i === 3) {
    // skip to the next iteration in the loop
    continue
  }
  console.log(`The number is: ${i}.`)
}
