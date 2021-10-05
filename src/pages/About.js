import React from 'react';
import Navigation from '../components/Navigation';

import { motion } from 'framer-motion';
import { SuperNavMenu } from '../components/SuperNavMenu';
import sun from '../images/sun.png'; // with import
import venus from '../images/venusBack.png'; // with import
import Mouse from '../components/Mouse';
import robot from '../images/robotSat.png'; // with import
import DotsIndic from '../components/DotsIndic';
import { NavLink } from 'react-router-dom';
import SlideshowAbout from '../components/SlideshowAbout';

const About = () => {


    const sunTrans = { //Pour soleil
        initial: {
            opacity: 0,
            x: -100,
            y: -100,
        },
        visible: {
            opacity: 1,
            transition: { duration: 2},
            x: 0,
            y: 0,
        },
        exit: {
           opacity: 0,
           transition: { duration: 1},
           x: -150,
           y: 80,
        }
    }
    
    const venusTrans = { //Pour venus
        initial: {
            opacity: 0,  
            x: 0,
            y: 800,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
            x: 0,
            y: 0,
        },
        exit: {
           opacity: 0,
           transition: { duration: 1},
           x: 0,
           y: 800,
        }
    }

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
            y: 100,
        },
        exit: {
          opacity: 0,
          transition: { duration: 1, bounce: 0.3},
          x: 0,
          y: -500,
        }
    }

    const roboTrans = { //Pour le robot de venus
        initial: {
            opacity: 0,  
            x: 0,
            y: 800,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
            x: 0,
            y: 0,
        },
        exit: {
           opacity: 0,
           transition: { duration: 1},
           x: 0,
           y: 800,
        }
    }



    return (
        <div className="about">
            <DotsIndic/>
            <Mouse/>
            <motion.div className="divMenu" initial="initial" animate="visible" exit="exit" variants={sunTrans}>
                <img id="sun" className="hover" src={sun}/>
                <SuperNavMenu />
            </motion.div>
            <motion.img id="venusBackground" className="hover" src={venus} initial="initial" animate="visible" exit="exit" variants={venusTrans}/>
            <motion.img id="robotVenus" className="hover" src={robot} initial="initial" animate="visible" exit="exit" variants={roboTrans}/>
            <motion.fieldset className="aboutCadre" initial="initial" animate="visible" exit="exit" variants={aboutCadre}>
                <SlideshowAbout/>
                <legend className="titleCadre"> About Me </legend>
                {/* <div className="textCadre"> I am a 28 year old French national, with over two years of industry experience, looking for an IT position in Australia. I am reliable, highly motivated and hard-working, and I have worked on a variety of IT projects involving website development and maintenance, game design and UX design. </div>    
                <div className="textCadre"> My studies and my previous professional experiences have influenced my software design method, which is centred upon maximising user experience.  </div>    
                <div className="textCadre"> I am interested in remaining in Australia for the medium to long-term, so I am searching for a stable position with room to grow professionally and the opportunity to gain a work visa. </div>    
                <div className="textCadreEnd"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quod, veritatis ratione qui quia illo nulla. Illo ut quisquam veniam, sunt explicabo dolor dolores aliquid tempore! Optio inventore eum, omnis officiis aspernatur voluptatum. </div>     */}
            </motion.fieldset>
            <NavLink to="/aboutDetails" exact className="hover" activeClassName="nav-active" >
                <button class="button4">Show me mored</button>
            </NavLink>
            
        </div>
    );
};

export default About;