import mongoose from 'mongoose'
import express from 'express'

import { getCinemas } from './controllers/cinema.js'

mongoose.connect('mongodb://localhost:27017/webdev')

const app = express()

app.set('view engine', 'hbs')

app.get('/cinemas', getCinemas)

app.listen('3000', () => console.log('listening'))
