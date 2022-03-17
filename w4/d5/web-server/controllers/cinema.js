import Cinema from '../models/Cinema.js'

async function getCinemas(request, response, next) {
  const cinemas = await Cinema.find()

  response.render('cinemas', {
    cinemas,
  })
}

export { getCinemas }
