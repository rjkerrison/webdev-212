const Film = require('../models/Film.model.js')

const router = require('express').Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/random', (req, res, next) => {
  if (Math.random() > 0.5) {
    res.render('index')
  } else {
    next()
  }
})

module.exports = router
