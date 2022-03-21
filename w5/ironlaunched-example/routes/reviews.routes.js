const Review = require('../models/Review.model.js')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const reviews = await Review.find()

  res.render('reviews', { reviews })
})

module.exports = router
