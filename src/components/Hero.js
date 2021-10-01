import React from 'react'
import { motion } from 'framer-motion'

//css
import '../styles/Hero.css'

//assets
import Git from '../assets/svg/icons/git.svg'
import In from '../assets/svg/icons/in.svg'
import Twitter from '../assets/svg/icons/twitter.svg'

import HeroImg from '../assets/svg/heroimg.svg'
import HeroImgM from '../assets/svg/hero-m.svg'
import Mail from '../assets/svg/cmail.svg'
import Ayo from '../assets/svg/icons/ayo.svg'
import Wave from '../assets/svg/icons/wave.svg'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                x: -150,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  delay: 2.5,
                  duration: 2,
                },
              },
            }}
            className="hero-socials"
          >
            <div className="hero-socialBox">
              <a
                href="https://github.com/ayoniyi"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Git} alt="github" />
              </a>
            </div>
            <div className="hero-socialBox">
              <a
                href="https://www.linkedin.com/in/ayo-niyi-a009b8166/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={In} alt="linkedin" />
              </a>
            </div>
            <div className="hero-socialBox">
              <a
                href="https://twitter.com/ayochills"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </motion.div>
          <div className="hero-content">
            <motion.div
              className="hero-left"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  //rotate: 15,
                  scale: 1.5,
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    delay: 1.3,
                    duration: 2,
                  },
                },
              }}
            >
              <div className="hero-leftContent">
                <div className="hero-Top">
                  <h1 className="hero-Title">Hi, I'm</h1>
                  <img className="ay-t" src={Ayo} alt="hi" />
                  <motion.img
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        //rotate: 15,
                        //scale: 2,
                      },
                      visible: {
                        scale: 1,
                        rotate: [
                          0,
                          30,
                          -15,
                          30,
                          -15,
                          30,
                          -15,
                          30,
                          -15,
                          30,
                          -15,
                          30,
                          -15,
                          0,
                        ],
                        transition: {
                          //repeat: Infinity,
                          type: 'spring',
                          delay: 0.2,
                          duration: 4,
                          //repeat: Infinity,
                        },
                      },
                    }}
                    className="wave"
                    src={Wave}
                    alt="hi"
                  />
                </div>
                <div className="hero-body">
                  <p>
                    I’m a front end developer. I convert abstractions and models
                    to real life products for the web.
                  </p>
                </div>
                <div className="hero-btm">
                  <a href="mailto:ayo.a.niyi@gmail.com">
                    <div className="hero-mailBtn">
                      <img src={Mail} alt="mail" />
                      <p>Get in touch</p>
                    </div>
                  </a>
                  <a href="#works">
                    <button className="hero-worksBtn">View projects</button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  //rotate: 15,
                  opacity: 0,
                  // scale: 0.6,
                  x: 300,
                },
                visible: {
                  opacity: 1,
                  // scale: 1,
                  x: 0,
                  transition: {
                    type: 'spring',
                    delay: 0.2,
                    duration: 2,
                  },
                },
              }}
              className="hero-right"
            >
              <div className="hero-rightContent">
                <img className="hero-Img" src={HeroImg} alt="hero" />
                <img className="heroImg-m" src={HeroImgM} alt="hero" />
              </div>
              <div className="heromail-m">
                <div className="hero-mailBtn-m">
                  <img src={Mail} alt="mail" />
                  <p>Get in touch</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
