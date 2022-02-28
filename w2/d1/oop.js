// Object Oriented Programming

// OOP is all about basing our programming around Objects
// It's different from functional programming, where functions are most important

// Object methods help us DO things with Objects
const bike = {
  color: 'red',
  brand: 'Canondale',
  owner: 'Abdou',
  tyres: [
    { position: 'front', status: 'inflated' },
    { position: 'back', status: 'punctured' },
  ],
  speedInKmph: 0,
  speedUp(increaseInSpeed) {
    this.speedInKmph += increaseInSpeed
  },
  // Object method syntax
  getDescription() {
    return `A ${this.color} ${this.brand} bike owned by ${this.owner}.`
  },
  // object property with a function expression
  slowDown: function (decreaseInSpeed) {
    this.speedInKmph -= decreaseInSpeed
  },
  // ARROW FUNCTIONS do not capture the meaning of "this"
  getOwnerName: () => {
    return this.owner
  },
}

console.log(bike.speedInKmph)
bike.speedUp(5)
console.log(bike.speedInKmph)
bike.speedUp(7)
console.log(bike.speedInKmph)
bike.slowDown(3)
console.log(bike.speedInKmph)

console.log(bike.getDescription())
console.log(bike.getOwnerName())
