import React from 'react'
import Navbar from '/src/components/Navbar.jsx'
import Map from '/src/components/Map.jsx'
import Placed from '../components/Placed'
import Hero from '/src/components/Hero.jsx'
function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Map></Map>
      <Placed></Placed>

    </div>
  )
}

export default Main
