import Cinema from '../models/Cinema.js'

async function getCinemas(request, response, next) {
  const cinemas = await Cinema.find()

  response.render('cinemas', {
    cinemas,
  })
}

function cinemaFromRequestBody(request) {
  // grab the data from the body
  const { name, city, postalCode } = request.body
  // build our data to add into our database
  const cinema = {
    name,
    address: {
      city,
      postalCode,
    },
  }
  return cinema
}

async function createCinema(request, response, next) {
  const cinemaToCreate = cinemaFromRequestBody(request)
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
  console.log('getting cinema')
  const id = request.params.id
  const cinema = await Cinema.findById(id)

  response.render('cinema', {
    cinema,
  })
}

async function editCinema(request, response, next) {
  console.log('editing cinema')
  const id = request.params.id
  const cinemaUpdate = cinemaFromRequestBody(request)

  const cinema = await Cinema.findByIdAndUpdate(id, cinemaUpdate, { new: true })

  console.log({ cinema, cinemaUpdate })

  response.render('cinema', {
    cinema,
  })
}

export { getCinemas, createCinema, getCinema, editCinema }
