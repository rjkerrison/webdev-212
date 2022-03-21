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
    const films = await Film.find({ _id: req.params.id })

    throw new Error('CUSTOM EXCEPTION TO TEST ERROR HANDLING')

    res.render('films', { films })
  } catch (error) {
    next(error)
  }
})

module.exports = router
