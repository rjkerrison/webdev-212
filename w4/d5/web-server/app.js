import mongoose from 'mongoose'
import express from 'express'

import { getCinemas, createCinema } from './controllers/cinema.js'

mongoose.connect('mongodb://localhost:27017/webdev')

const app = express()

// accept incoming request body
app.use(express.json()) // as JSON
app.use(express.urlencoded({ extended: true })) // as url form data

// render views using hbs
app.set('view engine', 'hbs')

// Set up routes
app.get('/cinemas', getCinemas)
app.post('/cinemas', createCinema)

// We're ready to listen
app.listen('3000', () => console.log('listening'))
