import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import m1 from '../images/MissionOffisim.jpg';
import m2 from '../images/Afpa.jpg';
import m3 from '../images/cts.png';
import Ljava from '../images/logoJava.png';
import Ljavascript from '../images/logoJS.png';
import LfullWeb from '../images/logoFullWeb.png';
import Lpython from '../images/logoPython.png';
import Lreact from '../images/logoReact.png';
import { motion, useCycle } from 'framer-motion';

const slideImages = [
    m2,
    m1,
    m3
];

const diapo = {
  initial: {
      opacity: 0,
      x: 0,
      y: -500,
  },
  visible: {
      opacity: 1,
      transition: { duration: 3, type: "spring", bounce: 0.3},
      x: 0,
      y: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, bounce: 0.3},
    x: 0,
    y: -500,
  }
}

const SlideshowAbout = () => {
    return (
      <div className="slide-container-about">
        <Slide duration="100000">
          <div className="each-slide">
            <div className="inside-slide">
                <div className="flexTestRow"> I am a 28 year old French national, with over two years of industry experience, living in Sydney Australia. I have worked on a variety of IT projects involving website development and maintenance, game design and UX design. </div>    
                <div className="flexTestRow"> My studies and my previous professional experiences have influenced my software design method, which is centred upon maximising user experience. I am open to any type of innovative project, website creation, artistic project or video game. </div>    
            </div>
          </div>
          <div className="each-slide">
            <div className="inside-slide">
              <div id="skills">
                <div className="skill">
                  <img className="skillImage" src={Ljava}/>
                  <div className="skillSet">
                    <div className="skillText">
                      <div className="skillName"> Java </div>
                      <div className="skillYear"> 3 YEARS </div>
                    </div>
                    <div className="skill-set__bar"></div>
                  </div>
                </div>
                <div className="skill">
                  <img className="skillImage" src={Lreact}/>
                  <div className="skillSet">
                    <div className="skillText">
                      <div className="skillName"> React JS </div>
                      <div className="skillYear"> 6 MONTHS </div>
                    </div>
                    <div className="skill-set__bar"></div>
                  </div>
                </div>
                <div className="skill">
                  <img className="skillImage" src={LfullWeb}/>
                  <div className="skillSet">
                    <div className="skillText">
                      <div className="skillName"> Html / Css / Javascript </div>
                      <div className="skillYear"> 3 YEARS </div>
                    </div>
                    <div className="skill-set__bar"></div>
                  </div>
                </div>
                <div className="skill">
                  <img className="skillImage" src={Lpython}/>
                  <div className="skillSet">
                    <div className="skillText">
                      <div className="skillName"> Python </div>
                      <div className="skillYear"> 1 YEAR </div>
                    </div>
                    <div className="skill-set__bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default SlideshowAbout;