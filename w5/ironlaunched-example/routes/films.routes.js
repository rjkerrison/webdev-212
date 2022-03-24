const Favourite = require('../models/Favourite.model.js')
const Film = require('../models/Film.model.js')
const Review = require('../models/Review.model.js')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const films = await Film.find()
  films.forEach((film) => {
    film.viewUrl = `${req.baseUrl}/${film._id}`
  })

  res.render('films', { films, createUrl: `${req.baseUrl}/create` })
})

// We put this route ahead of :id so that we don't
// wrongly match that route (with id='summary')
router.get('/summary', async (req, res, next) => {
  const filmCount = await Film.countDocuments()

  res.render('summary', { filmCount })
})

router.get('/create', async (req, res, next) => {
  try {
    res.render('newFilm', { actionUrl: req.baseUrl })
  } catch (error) {
    next(error)
  }
})

// This matches ANY string
router.get('/:id', async (req, res, next) => {
  try {
    const film = await Film.findById(req.params.id)

    const reviews = await Review.find({ film: req.params.id })

    res.render('film', { film, ...getUrlsForId(req), reviews })
  } catch (error) {
    next(error)
  }
})

// POST /films/:id/favourites
router.post('/:id/favourites', async (req, res, next) => {
  try {
    const userId = req.body.userId
    const film = await Film.findById(req.params.id)
    const favourite = await Favourite.create({
      user: userId,
      film: film.id,
    })

    const data = {
      liked: true,
      count: await Favourite.countDocuments({ film: film.id }),
    }

    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Film.create(req.body)
    res.redirect(req.baseUrl)
  } catch (error) {
    next(error)
  }
})

const getUrlsForId = (req) => {
  return {
    viewUrl: `${req.baseUrl}/${req.params.id}`,
    editUrl: `${req.baseUrl}/${req.params.id}/edit`,
    deleteUrl: `${req.baseUrl}/${req.params.id}/delete`,
  }
}

router.get('/:id/edit', async (req, res, next) => {
  try {
    const film = await Film.findById(req.params.id)
    res.render('editFilm', { film, ...getUrlsForId(req) })
  } catch (error) {
    next(error)
  }
})

router.post('/:id/edit', async (req, res, next) => {
  const { name, year, director } = req.body
  const filmToEdit = {
    name,
    year,
    director,
  }

  try {
    await Film.findByIdAndUpdate(req.params.id, filmToEdit)
    const { viewUrl } = getUrlsForId(req)
    res.redirect(viewUrl)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/delete', async (req, res, next) => {
  try {
    await Film.findByIdAndDelete(req.params.id)

    res.redirect(req.baseUrl)
  } catch (error) {
    next(error)
  }
})

module.exports = router
