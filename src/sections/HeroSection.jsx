import React from 'react'
import Hero from '../components/Hero'

const HeroSection = ({data}) => {
  return (
    <section className="theme-background">
      <Hero data={data} />
    </section>
  );
}

export default HeroSection