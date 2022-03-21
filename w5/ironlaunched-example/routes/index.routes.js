const Film = require('../models/Film.model.js')

const router = require('express').Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/films', async (req, res, next) => {
  const films = await Film.find()

  res.render('films', { films })
})

module.exports = router
