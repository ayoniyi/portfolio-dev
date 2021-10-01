import React from 'react'

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
              </a>
            </div>
            <div className="footer-box2">
              <img src={Logo} alt="logo" />
              <a href="mailto:ayo.a.niyi@gmail.com">
                <div className="footer-mailBtn">
                  <img src={Mail} alt="mail" />
                  <p>Get in touch</p>
                </div>
              </a>
            </div>
            <div className="footer-box3">
              <div className="footer-emoji">
                <img src={Emojji} alt="emoji" />
              </div>
              <div className="footer-links">
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