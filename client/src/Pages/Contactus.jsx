import React from 'react'
import Navbar from '../Elements/Navbar'
import ContactForm from '../Elements/ContactusForm'
import Footer from '../Elements/Footer'

export default function Contactus() {
  return (
    <>
      <div className="gaming-background">
        <Navbar></Navbar>
        <ContactForm/>
        <Footer/>
      </div>
    </>
  )
}
