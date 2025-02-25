import React from 'react'
import Navbar from '../Elements/Navbar'
import GamesSection from '../Elements/GamesSection'
import Footer from '../Elements/Footer'

export default function Games() {
  return (
    <>
      <div className="gaming-background">
        <Navbar></Navbar>
        <GamesSection/>
        <Footer/>

      </div>
    </>
  )
}
