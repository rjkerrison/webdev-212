const { default: axios } = require('axios')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const response = await axios({
    // default method is GET anyway
    method: 'GET',
    url: '/showtimelist',
    baseURL: 'https://api.allocine.fr/rest/v3',
    // we pass the query parameters as an object
    // axios takes care of the rest
    params: {
      partner: '000042532791',
      format: 'json',
      theaters: 'C0050',
      page: 1,
      count: 10,
    },
  })

  console.log(response.data)

  res.json(response.data.feed.theaterShowtimes)
})

module.exports = router
