import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import lampROn from '../images/lampROn.png'; // with import
import lampROff from '../images/lampROff.png'; // with import
import m1 from '../images/MissionOffisim.jpg';
import m2 from '../images/Afpa.jpg';
import m3 from '../images/cts.png';
import { motion, useCycle } from 'framer-motion';

const slideImages = [
    m2,
    m1,
    m3
];

const diapo = { //Pour la lune
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

const Slideshow2 = () => {
    return (
      <motion.div className="slide-container" initial="initial" animate="visible" exit="exit" variants={diapo}>
        <Slide duration="100000">
          <div className="each-slide">
            <div className="inside-slide">
              <div className="flexTitle"> Design and development engineer : Sopra Steria | 2018-2020 | Strasbourg FRANCE </div>
              <div className="flexTestRow">
                  <img id="project1" src={slideImages[0]}/>
                  <div className="flexTestCornerRight"> This position primarily involved working with other developers using the Agile method (Sprint) to build technical solutions and maintain the website of the French National Agency for the Professional Training of Adults (AFPA). It also required gathering first-hand information from clients and communicating website requirements, demonstrating new features, and training customers. </div>
              </div>
              <div className="flexTestColumn">
                  <div> My duties involved : </div>
                  <div className="flexTestRowBottom"> - AFPA website maintenance; <br/> - Developping new applications, components and functionalities for the AFPA website;<br/> - Improving site performance;<br/> - Creating front-end and back-end solution proposals;<br/> - Creating a new design proposal for an application for the Strasbourg Public Transport Company (CTS);<br/> - Using Agile work method (Sprint);<br/> - Working with clients to establish requirements and determine priorities;<br/> - Attending face-to-face meetings with clients;<br/> - Analyzing data, performance compatibility and undertaking quality assurance tests and<br/> - Researching alternative configurations - implementing better solutions for the website AFPA </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="inside-slide">
                <div className="flexTitle"> UX & GameDesigner : University of Lorraine | 2016-2017| Nancy FRANCE</div>
                <div className="flexTestRow">
                    <img id="project1" src={slideImages[1]}/>
                    <div className="flexTestCornerRight"> This role centred upon the design and development of the serious game "Mission Offi'sim", which is a training application for pharmacology students. The game simulates real-world scenarios patients, who come into the pharmacy for advice or over-the-counter medication. "Mission Offi'Sim" won the Grand Prizeat the 2018 MEDEA Awards, which encourages innovation and best practices in the use of media in education (for audio, video,graphics and animation). </div>
                </div>
                <div className="flexTestColumn">
                    <div> My duties involved : </div>
                    <div className="flexTestRowBottom"> - Creating an ergonomic gaming interface;<br/> - Determining game parameters (specifically, level difficulty and over all playability);<br/> - Establishing a rewards system for players;<br/> - Helping to film and direct live actors for video scenes (onlocation);<br/> - Presenting and marketing Offi'Sim at public events and<br/> - Creating scripts and dialogues </div>
              </div>
            </div>
          </div>
        </Slide>
      </motion.div>
    )
}

export default Slideshow2;