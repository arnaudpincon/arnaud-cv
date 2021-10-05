import React from 'react';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { SuperNavMenu } from '../components/SuperNavMenu';
import sun from '../images/sun.png'; // with import
import venus from '../images/venusBack.png'; // with import
import Mouse from '../components/Mouse';
import robot from '../images/robotSat.png'; // with import
import DotsIndic from '../components/DotsIndic';

const AboutDetails = () => {

    const aboutCadre = { //Pour la lune
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

    return (
        <motion.fieldset className="aboutDetails" initial="initial" animate="visible" exit="exit" variants={aboutCadre}>
                <legend className="titleCadre"> About Me </legend>
                <div className="textCadre"> I am a 28 year old French national, with over two years of industry experience, looking for an IT position in Australia. I am reliable, highly motivated and hard-working, and I have worked on a variety of IT projects involving website development and maintenance, game design and UX design. </div>    
                <div className="textCadre"> My studies and my previous professional experiences have influenced my software design method, which is centred upon maximising user experience.  </div>    
                <div className="textCadre"> I am interested in remaining in Australia for the medium to long-term, so I am searching for a stable position with room to grow professionally and the opportunity to gain a work visa. </div>    
                <div className="textCadre"> My studies and my previous professional experiences have influenced my software design method, which is centred upon maximising user experience.  </div>           
                <div className="textCadreEnd"> I am interested in remaining in Australia for the medium to long-term, so I am searching for a stable position with room to grow professionally and the opportunity to gain a work visa. </div>    
        </motion.fieldset>
    );
};

export default AboutDetails;