import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home