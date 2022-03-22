const Film = require('../models/Film.model.js')
const Review = require('../models/Review.model.js')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const reviews = await Review.find()

  for (let review of reviews) {
    const filmId = review.film
    review.film = await Film.findById(filmId)
  }

  res.render('reviews', { reviews })
})

module.exports = router
