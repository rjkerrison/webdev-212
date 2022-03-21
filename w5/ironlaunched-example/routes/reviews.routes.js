const Review = require('../models/Review.model.js')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const reviews = await Review.find()

  res.send(JSON.stringify(reviews))
})

module.exports = router
