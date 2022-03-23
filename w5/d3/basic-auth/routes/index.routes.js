const isAdmin = require('../middleware/isAdmin')
const isLoggedIn = require('../middleware/isLoggedIn')

const router = require('express').Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/admin', isLoggedIn, isAdmin, (req, res, next) => {
  res.send('ADMIN SECRET SECTION')
})

module.exports = router
