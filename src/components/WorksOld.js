import React, { useEffect, useRef } from 'react'
//import hoverEffect from 'hover-effect'
import { gsap } from 'gsap'
//import { motion } from 'framer-motion'

//css
import '../styles/Works.css'

//assets
import Emoji from '../assets/svg/worksem.svg'
import Jp from '../assets/svg/works/jp.svg'
import Jpsm from '../assets/svg/works/jp-m.svg'
import Pms from '../assets/svg/works/pms.svg'
import Pmssm from '../assets/svg/works/pms-m.svg'
import Rnm from '../assets/svg/works/rnm.svg'
import Rnmsm from '../assets/svg/works/rnm-m.svg'
import Bj from '../assets/svg/works/bj.svg'
import Bjsm from '../assets/svg/works/bj-m.svg'
import Ms from '../assets/svg/works/ms.svg'
import Mssm from '../assets/svg/works/ms-m.svg'
// import Fl from '../assets/svg/works/fl.svg'
// import Flsm from '../assets/svg/works/fl-m.svg'
import Tm from '../assets/svg/works/tm.svg'
import Tmsm from '../assets/svg/works/tmsm.svg'
//import Distort from '../assets/14.jpg'

const WorksOld = () => {
  useEffect(() => {
    //   const image_animate = new hoverEffect({
    //     parent: document.querySelector('.workimg'),
    //     intensity: 0.3,
    //     image1: Jp,
    //     image2: Jp,
    //     displacementImage: Distort,
    //   })

    gsap.from(emoji, {
      scrollTrigger: {
        trigger: emoji,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 1.7,
      duration: 0.8,
    })
  })

  let emoji = useRef(' ')

  return (
    <>
      <section className="works">
        <div id="works" className="works-content">
          <div className="section-top">
            <h1 className="sm-Titles">Stuff i've done.</h1>
            <img
              ref={(el) => {
                emoji = el
              }}
              className="emojiImg0"
              src={Emoji}
              alt="yo"
            />
          </div>
          <div className="works-container">
            <div className="works-rows">
              <div className="works-single">
                <a href="https://jupita.co/" target="_blank" rel="noreferrer">
                  {/* <a
                  href="https://jupita2-0.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                > */}
                  <div className="works-box">
                    <img className="workimg hvr-shrink" src={Jp} alt="jupita" />
                    {/* <div className="workimg"></div> */}
                    <img className="workimg-m" src={Jpsm} alt="jupita" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>NEXTJS, FRAMER MOTION, GSAP</p>
                </div>
              </div>
              <div className="works-single2">
                <a
                  href="https://a-pms.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img className="workimg hvr-shrink" src={Pms} alt="pms" />
                    <img className="workimg-m" src={Pmssm} alt="pms" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>FIGMA, REACTJS, NODEJS, EXPRESS, MONGOOSE</p>
                </div>
              </div>
            </div>

            <div className="works-rows">
              <div className="works-single">
                <a
                  href="https://ricknmortydata.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img className="workimg hvr-shrink" src={Rnm} alt="rnm" />
                    <img className="workimg-m" src={Rnmsm} alt="rnm" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACTJS, FRAMER MOTION</p>
                </div>
              </div>
              <div className="works-single2">
                <a
                  href="https://buhari-jemilu.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img className="workimg hvr-shrink" src={Bj} alt="pms" />
                    <img className="workimg-m" src={Bjsm} alt="rnm" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACTJS, FRAMER MOTION</p>
                </div>
              </div>
            </div>

            <div className="works-rows">
              <div className="works-single">
                <a
                  href="https://mendesuya.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={Ms}
                      alt="mende suya"
                    />
                    <img className="workimg-m" src={Mssm} alt="mende suya" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACTJS, CONTEXT API.</p>
                </div>
              </div>
              {/* <div className="works-single2 ">
                <a
                  href="https://floyfoundation.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box mg-le">
                    <img className="workimg hvr-shrink" src={Fl} alt="floy" />
                    <img className="workimg-m" src={Flsm} alt="floy" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>HTML, CSS, JAVASCRIPT</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksOld
