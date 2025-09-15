import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutImgRef = useRef(null);
  const aboutHeadRef = useRef(null);
  const aboutParaRef = useRef(null);
  const storyParaRef = useRef(null);
  const storyImgRef = useRef(null);

  useEffect(() => {
    // About image
    gsap.from(aboutImgRef.current, {
      scrollTrigger: {
        trigger: aboutImgRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse", // 👈 reverse added
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // About heading
    gsap.from(aboutHeadRef.current, {
      scrollTrigger: {
        trigger: aboutHeadRef.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });

    // About paragraph
    gsap.from(aboutParaRef.current, {
      scrollTrigger: {
        trigger: aboutParaRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Story paragraph
    gsap.from(storyParaRef.current, {
      scrollTrigger: {
        trigger: storyParaRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Story image
    gsap.from(storyImgRef.current, {
      scrollTrigger: {
        trigger: storyImgRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className='about-container'>
        <div className='about-img' ref={aboutImgRef}>
          <img src="./about3.jpg" alt="About" />
        </div>

        <div className='about-head' ref={aboutHeadRef}>
          <p>About Us</p>
        </div>

        <div className='about-flex'>
          <div className='story-png'>
            <img src="./about-story.png" alt="Story Icon" />
          </div>
          <div className='about-para' ref={aboutParaRef}>
            <p>
              Welcome to CodeZyar, a software house built with passion, innovation, and a vision to
              empower businesses through technology. In today’s fast-changing digital era, we believe every business deserves smart,
              reliable, and future-ready solutions — and that’s exactly what we deliver.
            </p>
            <br />
            <p>
              We started CodeZyar with a simple idea: to
              bridge the gap between business needs and modern technology. Over time, we have grown into a team of talented developers,
              creative designers, and strategic thinkers who share a common mission — to help companies grow, scale, and succeed in the
              digital world.
            </p>
          </div>
        </div>

        <div className='story-section theme-background'>
          <div>
            <p className='about-story'>Our Story</p>
            <div className='story-flex'>
              <div className='story-para' ref={storyParaRef}>
                <p>
                  CodeZyar was founded with the belief that technology should work for people, not the other way around.
                  From the beginning, our goal has been to provide custom-made software solutions that are not only functional but
                  also user-friendly and scalable.
                </p>
                <br />
                <p>
                  We’ve worked with startups trying to bring their first idea to life, small businesses
                  looking to expand their reach, and established companies that want to innovate and stay ahead. Every project teaches us
                  something new and strengthens our commitment to excellence.
                </p>
              </div>
              <div>
                <img className='story-img' ref={storyImgRef} src="./story5.png" alt="Story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
