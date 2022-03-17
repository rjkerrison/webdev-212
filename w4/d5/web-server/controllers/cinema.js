import Cinema from '../models/Cinema.js'

async function getCinemas(request, response, next) {
  const cinemas = await Cinema.find()

  response.render('cinemas', {
    cinemas,
  })
}

async function createCinema(request, response, next) {
  // grab the data from the body
  const { name, city, postalCode } = request.body
  // build our data to add into our database
  const cinemaToCreate = {
    name,
    address: {
      city,
      postalCode,
    },
  }

  // add into db
  const createdCinema = await Cinema.create(cinemaToCreate)
  console.log(createdCinema)

  // gather the updated list
  const cinemas = await Cinema.find()

  // show the result
  response.render('cinemas', {
    cinemas,
  })
}

async function getCinema(request, response, next) {
  const id = request.params.id

  const cinema = await Cinema.findById(id)
  console.log(cinema)

  response.render('cinema', {
    cinema,
  })
}

export { getCinemas, createCinema, getCinema }
