const person = {
  name: 'Ironhacker',
  age: 25,
  favoriteMusic: 'Metal',
  hairColour: 'red',
  country: 'Germany',
  address: {
    street: 'Super Cool St',
    number: 123,
    city: 'Miami',
  },
}

// destructuring person
const {
  name: personName,
  favoriteMusic,
  age,
  personCountry = 'Spain',
  hairColour: colourOfHair,
  address: { personCity },
} = person

console.log(`Hello, ${personName}.`)
console.log(`You are ${age} years old.`)
console.log(`You have ${colourOfHair} hair.`)
console.log(`Your favorite music is ${favoriteMusic}.`)
console.log(`You are from ${personCountry}.`)
console.log(`You are in ${personCity}.`)

const newPerson = {
  personName,
  colourOfHair,
  age,
}

console.log(newPerson)

console.log({ person, newPerson })

/* 
    Given the previous object data, use the object destructuring to be able to print
    - student first and last name,
    - favorite football club,
    - as well as the city and the country this student is coming from. 
*/
const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
}

const {
  name: { firstName, lastName },
  favoriteFootballTeam,
  hometown: { city, country },
} = data

console.log(`first name ${firstName}`)
console.log(`last name ${lastName}`)
console.log(`team ${favoriteFootballTeam}`)
console.log(`from city ${city}`)
console.log(`from country ${country}`)

const campuses = ['madrid', 'barcelona', 'miami']

const [city1, , city2] = campuses

console.log(`There are campuses in ${city1} and ${city2}!`)

const europeanCampuses = [
  ['madrid', 'es'],
  ['barcelona', 'es'],
  [
    {
      localName: 'berlin',
      frName: 'berlin',
    },
    'de',
  ],
  ['paris', 'fr'],
  ['amsterdam', 'nl'],
  ['lisbon', 'pt'],
]

const [[campusSpain1], [campusSpain2], [{ frName }, theCountry]] =
  europeanCampuses

console.log(europeanCampuses[2][1], theCountry)
console.log(europeanCampuses[2][0].frName, 'berlin')
