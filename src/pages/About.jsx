import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className='about-container '>
        <div className='about-img'>
          <img src="./about3.jpg" alt="" />
        </div>
        <div className='about-head '>
          <p>About Us</p>
        </div>
        <div className='about-flex'>
          <div className='story-png'>
            <img src="./about-story.png" alt="" />
          </div>
          <div className='about-para'  >
            <p>Welcome to CodeZyar, a software house built with passion, innovation, and a vision to
              empower businesses through technology. In today’s fast-changing digital era, we believe every business deserves smart,
              reliable, and future-ready solutions — and that’s exactly what we deliver.</p>
            <br />
            <p>
              We started CodeZyar with a simple idea: to
              bridge the gap between business needs and modern technology. Over time, we have grown into a team of talented developers,
              creative designers, and strategic thinkers who share a common mission — to help companies grow, scale, and succeed in the
              digital world.</p>
          </div>
        </div>
        <div className='story-section theme-background ' >
          <div>
            <p className='about-story'>Our Story</p>
            <div className='story-flex' >
              <div className='story-para'>
                <p>
                  CodeZyar was founded with the belief that technology should work for people, not the other way around.
                  From the beginning, our goal has been to provide custom-made software solutions that are not only functional but
                  also user-friendly and scalable.</p>
                <br />
                <p>
                  We’ve worked with startups trying to bring their first idea to life, small businesses
                  looking to expand their reach, and established companies that want to innovate and stay ahead. Every project teaches us
                  something new and strengthens our commitment to excellence.
                </p>
              </div>
              <div>
                <img className='story-img' src="./story5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About