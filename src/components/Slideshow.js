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

const Slideshow = () => {
    return (
      <motion.div className="slide-container" initial="initial" animate="visible" exit="exit" variants={diapo}>
        <Slide duration="100000">
          <div className="each-slide">
            <div className="inside-slide">
              <div className="flexTitle"> Design and development engineer : Sopra Steria | 2018-2020 | Strasbourg FRANCE</div>
              <div className="flexTestRow">
                  <img id="project1" src={slideImages[0]}/>
                  <div className="flexTestCornerRight"> This position primarily involved working with other developers using the Agile method (Sprint) to build technical solutions and maintain the website of the French National Agency for the Professional Training of Adults (AFPA). It also required gathering first-hand information from clients and communicating website requirements, demonstrating new features, and training customers. </div>
              </div>
              <div className="flexTestColumn">
                <div className="titleList"> My duties involved : </div>
                <ul className="listPortFolio">
                  <li>AFPA website maintenance;</li>
                  <li>Developping new applications, components and functionalities for the AFPA website;</li>
                  <li>Improving site performance;</li>
                  <li>Creating front-end and back-end solution proposals;</li>
                  <li>Using Agile work method (Sprint);</li>
                  <li>Working with clients to establish requirements and determine priorities;</li>
                  <li>Attending face-to-face meetings with clients;</li>
                  <li>Analyzing data, performance compatibility and undertaking quality assurance tests and</li>
                  <li>Researching alternative configurations</li>
                  <li>implementing better solutions for the website AFPA</li>
                </ul>
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
                  <div class="titleList"> My duties involved : </div>
                  <ul class="listPortFolio">
                    <li>Creating an ergonomic gaming interface;</li>
                    <li>Determining game parameters (specifically, level difficulty and over all playability);;</li>
                    <li>Establishing a rewards system for players;</li>
                    <li>Helping to film and direct live actors for video scenes (onlocation);</li>
                    <li>Presenting and marketing Offi'Sim at public events and</li>
                    <li>Creating scripts and dialogues</li>
                  </ul>
              </div>
            </div>
          </div>
        </Slide>
      </motion.div>
    )
}

export default Slideshow;