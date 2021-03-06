import React from 'react'
import { motion } from 'framer-motion'

import '../styles/Footer.css'

import Logo from '../assets/svg/footerlogo.svg'
import Emojji from '../assets/svg/footer-emoji.svg'
import Mail from '../assets/svg/cmail.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-box1">
              <p className="footer-bgtxt">Let’s make meaningful interfaces!</p>
              <a href="mailto:ayo.a.niyi@gmail.com">
                <p className="footer-text hvr-underline-from-left2">
                  Email: ayo.a.niyi@gmail.com
                </p>
                \
              </a>
            </div>
            <div className="footer-box2">
              <img src={Logo} alt="logo" className="logo-main2" />
              <a href="mailto:ayo.a.niyi@gmail.com">
                <div className="footer-mailBtn">
                  <img src={Mail} alt="mail" />
                  <p>Get in touch</p>
                </div>
              </a>
            </div>
            <div className="footer-box3">
              <div className="footer-emoji">
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
                      rotate: [0, 10, -5, 10, -5, 10, -5, 10, -5, 0],
                      transition: {
                        repeat: Infinity,
                        type: 'spring',
                        delay: 0.2,
                        duration: 4,
                      },
                    },
                  }}
                  src={Emojji}
                  alt="emoji"
                />
              </div>
              <div className="footer-links">
                <a
                  href="https://drive.google.com/file/d/1nwO6kiq8qa8W_8Qn5R5rE3Hj1klfhaGQ/view?usp=sharing"
                  rel="noreferrer"
                >
                  <p>resume</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayo-niyi-a009b8166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>linkedin</p>
                </a>
                <a
                  href="https://github.com/ayoniyi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>github</p>{' '}
                </a>
                <a
                  href="https://twitter.com/ayochills"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
