const isLoggedIn = require('../middleware/isLoggedIn')

const router = require('express').Router()

const decorateReqSomeMore = (req, res, next) => {
  req.myFavouritePet = 'a cat'
  next()
}

const dogOverride = (req, res, next) => {
  req.myFavouritePet = 'a dog'
  next()
}

/* GET home page */
router.get(
  '/',
  isLoggedIn,
  decorateReqSomeMore,
  dogOverride,
  (req, res, next) => {
    res.render('profile/index', {
      username: req.user.username,
      pet: req.myFavouritePet,
    })
  }
)

module.exports = router
