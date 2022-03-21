const { request } = require('http')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const Film = require('../models/Film.model.js')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const films = await Film.find()

  res.render('films', { films })
})

// We put this route ahead of :id so that we don't
// wrongly match that route (with id='summary')
router.get('/summary', async (req, res, next) => {
  const filmCount = await Film.countDocuments()

  res.render('summary', { filmCount })
})

// This matches ANY string
router.get('/:id', async (req, res, next) => {
  try {
    const film = await Film.findById(req.params.id)
    res.render('film', { film })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body
    const filmToCreate = { name }

    const newFilm = await Film.create(filmToCreate)
    res.set({ 'Content-Type': 'application/json' })
    res.send(JSON.stringify(newFilm))
  } catch (error) {
    next(error)
  }
})

module.exports = router
