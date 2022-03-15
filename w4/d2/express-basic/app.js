const express = require('express')

// We create our own server named app
// Express server will be handling requests and responses
const app = express()

// We set the "view engine" to say that handlebars will
// pre-process html responses
app.set('view engine', 'hbs')

// Static files
app.use(express.static('public'))

// reloading the browser on change — this is for development purposes only!
app.use(
  require('connect-livereload')({
    port: 35729,
  })
)

// our first Route
app.get('/home', (request, response, next) => {
  console.log(request)
  response.send('<h1>Our first express app</h1>')
})

// responding with a static html file
app.get('/friend', (request, response, next) =>
  response.sendFile(__dirname + '/views/neighbour.html')
)

// responding with a dynamic handlebars template
app.get('/about', (request, response, next) => {
  const data = {
    title: 'About',
    author: 'Robin James Kerrison',
  }

  response.render('template', data)
})

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'))
