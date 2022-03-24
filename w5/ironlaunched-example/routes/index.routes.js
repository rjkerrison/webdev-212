const { default: axios } = require('axios')
const Favourite = require('../models/Favourite.model')

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

router.get('/beers/:id', (req, res, next) => {
  axios
    .get(`https://api.punkapi.com/v2/beers/${req.params.id}`)
    .then((response) => {
      const { data } = response

      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
})

// GET /profile/:userId/favourites
router.get('/profile/:userId/favourites', async (req, res, next) => {
  try {
    const { userId } = req.params
    const favourites = await Favourite.find({
      user: userId,
    }).populate('film')

    res.json(favourites)
  } catch (error) {
    next(error)
  }
})

module.exports = router
