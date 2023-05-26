import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Need from '../components/Need'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Steps />
      <Need />
      <Subscribe />
      <Footer />

    </main>
  )
}

export default Home