const url =
  'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=870b1b10b58578f725b70b13aff6c357'

// When we use fetch() we're given a Promise to fulfill the request
// We don't know when it will finish (because we don't know how slow the server is)
const responsePromise = fetch(url)
console.log(responsePromise)

// instead, we tell the browser what to do afterwards (then)
responsePromise
  .then((res) => {
    // first, convert that response to json
    console.log('request successful!!!', res)
    return res.json()
  })
  .then((weatherInfo) => {
    // then do whatever we want with the data
    console.log('JSON DATA:', weatherInfo)
  })
