const express = require('express')

// We create our own server named app
// Express server will be handling requests and responses
const app = express()

// our first Route
app.get('/home', (request, response, next) => {
  console.log(request)
  response.send('<h1>Our favourite bear</h1>')
})

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '))
