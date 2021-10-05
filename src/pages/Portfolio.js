import React from 'react';
import Navigation from '../components/Navigation';

import { motion, useCycle } from 'framer-motion';
import { SuperNavMenu } from '../components/SuperNavMenu';
import sun from '../images/sun.png'; // with import
import lampLOn from '../images/lampLOn.png'; // with import
import lampLOff from '../images/lampLOff.png'; // with import
import lampROn from '../images/lampROn.png'; // with import
import lampROff from '../images/lampROff.png'; // with import
import cloud1 from '../images/cloud1.png'; // with import
import cloud2 from '../images/cloud2.png'; // with import
import cloud3 from '../images/cloud3.png'; // with import
import cloud4 from '../images/cloud4.png'; // with import
import cloud5 from '../images/cloud5.png'; // with import
import banc from '../images/banc.png'; // with import
import maisons from '../images/maisons.png'; // with import
import earthBack from '../images/earthBack.png';
import Mouse from "../components/Mouse";
import Slideshow from '../components/Slideshow';
import DotsIndic from '../components/DotsIndic';

const Portfolio = () => {

    const [turnL, cycle] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnR, cycle2] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnC1, cycleC1] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnC2, cycleC2] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnC3, cycleC3] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnC4, cycleC4] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const [turnC5, cycleC5] = useCycle(
        { opacity: 1, transition: { duration: 1}, x: 0, y: 0},
        { opacity: 0, transition: { duration: 0.5}, x: 0, y: 0}
    )

    const sunTrans = { //Pour venus
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

    const decor = { //Pour terre
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
        <div className="portfolio">
            <DotsIndic/>
            <Mouse/>
            <motion.div className="divMenu" initial="initial" animate="visible" exit="exit" variants={sunTrans}>
                <img id="sun" className="hover" src={sun}/>
                <SuperNavMenu />
            </motion.div>
            <motion.img id="earthBackground" className="hover" src={earthBack} initial="initial" animate="visible" exit="exit" variants={decor}/>
            <motion.img id="lampLOff" src={lampLOff} initial="initial" animate="visible" exit="exit" variants={decor}/>
            <motion.img id="lampLOn" src={lampLOn} initial="initial" animate={turnL} exit="exit" variants={decor} onTap={cycle}/>
            <motion.img id="lampROff" src={lampROff} initial="initial" animate="visible" exit="exit" variants={decor}/>
            <motion.img id="lampROn" src={lampROn} initial="initial" animate={turnR} exit="exit" variants={decor} onTap={cycle2}/>
            <motion.img id="banc" src={banc} initial="initial" animate="visible" exit="exit" variants={decor}/>
            <motion.img id="maisons" src={maisons} initial="initial" animate="visible" exit="exit" variants={decor}/>
            <motion.img id="cloud1" src={cloud1} initial="initial" animate={turnC1} exit="exit" variants={decor} onTap={cycleC1}
            whileHover={
                {
                    x: 80,
                    transition: { duration: 0.5 },
                    }
            }/>
            <motion.img id="cloud2" src={cloud2} initial="initial" animate={turnC2} exit="exit" variants={decor} onTap={cycleC2}whileHover={
                {
                    x: -90,
                    transition: { duration: 0.5 },
                    }
            }/>
            <motion.img id="cloud3" src={cloud3} initial="initial" animate={turnC3} exit="exit" variants={decor} onTap={cycleC3} whileHover={
                {
                    x: 50,
                    transition: { duration: 0.5 },
                    }
            }/>
            <motion.img id="cloud4" src={cloud2} initial="initial" animate={turnC4} exit="exit" variants={decor} onTap={cycleC4} whileHover={
                {
                    x: -50,
                    transition: { duration: 0.5 },
                }
            }/>
            <motion.img id="cloud5" src={cloud5} initial="initial" animate={turnC5} exit="exit" variants={decor} onTap={cycleC5} whileHover={
                {
                    x: -30,
                    transition: { duration: 0.5 },
                }
            }/>
            <Slideshow />
        </div>
    );
};

export default Portfolio;