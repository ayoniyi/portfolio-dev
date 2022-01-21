import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

//css
import '../styles/About.css'

//assets
import emoji from '../assets/svg/about/emoji1.svg'
import Zen from '../assets/zen2.gif'

import Footer from './Footer'

const About = () => {
  useEffect(() => {
    gsap.from(emoji2, {
      scrollTrigger: {
        trigger: emoji2,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 1.7,
      duration: 1.8,
    })
  }, [])

  let emoji2 = useRef(' ')
  return (
    <>
      <section className="about">
        <div id="about" className="about-container">
          <div className="about-content">
            <div className="section-top2">
              <h1 className="sm-Titles2">About me</h1>
              <img
                src={emoji}
                alt="yo"
                ref={(el) => {
                  emoji2 = el
                }}
              />
            </div>
            <div className="about-body">
              <div className="about-left">
                <div className="about-textbox">
                  <p>
                    I'm Ayo Niyi, a design oriented Front-End Developer with a
                    passion for creativity and innovation. I like to think I
                    create more than front-end interfaces but digital
                    experiences that communicate ideas, brands etc.
                  </p>
                </div>
                <div className="about-textbox">
                  <h2>Core tech / Skills</h2>
                  <p>
                    HTML/CSS/SASS, Javascript [ES6], TypeScript, Reactjs,
                    Nextjs, Redux/Redux toolkit, Nodejs, Express, Mongoose,
                    Framer motion, GSAP, Firebase, FIGMA, Wordpress, PHP, MySQL.
                  </p>
                </div>
                <div className="about-textbox">
                  <h2>Familiar with</h2>
                  <p>React Native, Vuejs, Nuxtjs, Socket.io, WebRTC.</p>
                </div>
              </div>
              <div className="about-right">
                <img src={Zen} alt="zen" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default About
