// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs')
hbs.registerPartials('./views/partials')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)

// default value for title local
const capitalized = require('./utils/capitalized')
const projectName = 'ironlaunched-example'

app.locals.appTitle = `${capitalized(
  projectName
)} created with IronLauncher today`

// 👇 Start handling routes here
const index = require('./routes/index.routes')
const filmsRoutes = require('./routes/films.routes')
const reviewsRoutes = require('./routes/reviews.routes')
const showtimesRoutes = require('./routes/showtimes.routes')
app.use('/films', filmsRoutes)
app.use('/reviews', reviewsRoutes)
app.use('/showtimes', showtimesRoutes)
app.use('/', index)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
