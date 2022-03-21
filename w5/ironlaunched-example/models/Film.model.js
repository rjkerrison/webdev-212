const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const filmSchema = new Schema({
  name: {
    type: String,
  },
  director: String,
  year: Number,
})

const Film = model('Film', filmSchema)

module.exports = Film
