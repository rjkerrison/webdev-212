const reptiles = ['snake', 'lizard', 'alligator']
const mammals = ['puppy', 'kitten', 'bunny']

// ES5 approach:

const animals = reptiles.concat(mammals)

console.log({ animals, reptiles, mammals })

// ES6: SPREAD

// [reptile[0], reptile[1], ..., mammals[0], ...]
const spreadAnimals = [...reptiles, ...mammals]
console.log({ spreadAnimals })

// shared reference – not separated!
const animalsClone = animals
// cheap way to shallow clone
const spreadAnimalsClone = [...animals]

spreadAnimalsClone[0] = 'dragon'
animalsClone[1] = 'komodo'

console.log({
  animals,
  animalsClone,
  spreadAnimalsClone,
})

function sayHello(person, ...pets) {
  // we can also destructure { name } here

  console.log('Hello', person?.name, pets.length)
  pets.forEach((pet) => console.log('and your pet', pet))
}

sayHello({ name: 'Robin' }, 'monkey', 'chicken', 'giraffe', ...animals)

sayHello()
