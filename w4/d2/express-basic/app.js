const express = require('express')

// We create our own server named app
// Express server will be handling requests and responses
const app = express()

// Static files
app.use(express.static('public'))

// our first Route
app.get('/home', (request, response, next) => {
  console.log(request)
  response.send('<h1>Our first express app</h1>')
})

app.get('/friend', (request, response, next) =>
  response.sendFile(__dirname + '/views/neighbour.html')
)

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '))
