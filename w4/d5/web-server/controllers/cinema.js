import Cinema from '../models/Cinema.js'

async function getCinemas(request, response, next) {
  const cinemas = await Cinema.find()

  response.set({
    'Content-Type': 'application/json',
  })
  response.send(JSON.stringify(cinemas))
}

export { getCinemas }
