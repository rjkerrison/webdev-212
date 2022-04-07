import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BeerInfo = () => {
  const [beer, setBeer] = useState({})

  // all API calls go inside the useEffect
  useEffect(() => {
    // they have to be inside an async function
    const fetchBeerData = async () => {
      const { data } = await axios.get(
        'https://api.punkapi.com/v2/beers/random'
      )

      // set the return value as state, to show it on screen
      setBeer(data[0])
    }
    // call that async function to call the API
    fetchBeerData()
  }, [])

  return (
    <section>
      <h2>
        {beer.name} &ndash; {beer.tagline}
      </h2>
      <p>{beer.description}</p>
    </section>
  )
}

export default BeerInfo
