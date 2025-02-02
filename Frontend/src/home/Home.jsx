import React from 'react'
import Banner from '../component/Banner'
import Navbar from '../component/Navbar'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'
import Contact from '../component/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Contact/>
      <Footer />
    </>
  )
}

export default Home
