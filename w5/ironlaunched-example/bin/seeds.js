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
  },
  {
    name: 'Die Hard',
  },
  {
    name: '27 Dresses',
  },
  {
    name: 'Trois Couleurs Bleu',
  },
]

Film.create(films)
  .then((filmsFromDB) => {
    console.log(`Created ${filmsFromDB.length} films`)

    // Once created, close the DB connection
    mongoose.connection.close()
  })
  .catch((err) =>
    console.log(`An error occurred while creating films from the DB: ${err}`)
  )
