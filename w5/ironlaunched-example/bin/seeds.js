// bin/seeds.js

const mongoose = require('mongoose')
const Film = require('../models/Film.model')

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/ironlaunched-example'

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err)
  })

const films = [
  {
    name: "Kiki's Delivery Service",
    director: 'Hayao Miyazaki',
    year: 1989,
  },
  {
    name: 'Die Hard',
    director: 'John McTiernan',
    year: 1988,
  },
  {
    name: '27 Dresses',
    director: 'Anne Fletcher',
    year: 2008,
  },
  {
    name: 'Trois Couleurs Bleu',
    director: 'Krzysztof Kieślowski',
    year: 1993,
  },
]

// Let's drop the database before seeding
// This is useful for testing our seeding, but we don't always want to do it
Film.deleteMany()
  .then(() => {
    return Film.create(films)
  })
  .then((filmsFromDB) => {
    console.log(`Created ${filmsFromDB.length} films`)

    // Once created, close the DB connection
    return mongoose.connection.close()
  })
  .catch((err) =>
    console.log(`An error occurred while creating films from the DB: ${err}`)
  )
