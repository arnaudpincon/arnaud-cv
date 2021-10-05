import React from 'react';
import Navigation from '../components/Navigation';
import earth from '../images/s_earth.png'; // with import
import venus from '../images/s_venus.png'; // with import
import moon from '../images/s_moon.png'; // with import
import sun from '../images/sun.png'; // with import
import { motion } from 'framer-motion';
import Mouse from '../components/Mouse';
import { NavLink } from 'react-router-dom';
import { SuperNavMenu } from '../components/SuperNavMenu';
import DotsIndic from '../components/DotsIndic';

const Home = () => {

    const earthTrans = { //Pour la terre
        initial: {
            opacity: 0,
            x: 50,
            y: 15,

        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
            x: 0,
            y: 0,
        },
        exit: {
            opacity: 0,
            x: 50,
            y: 15,
            transition: { duration: 0.5},
        }
    }

    const moonTrans = { //Pour la lune
        initial: {
            opacity: 0,
            x: -400,
            y: 300,
        },
        visible: {
            opacity: 1,
            transition: { duration: 3, type: "spring", bounce: 0.3},
            x: 0,
            y: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 1, type: "spring", bounce: 0.3},
            x: -400,
            y: 300,
        }
    }

    const venusTrans = { //Pour venus
        initial: {
            opacity: 0,
            x: 50,
            y: -400,
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
            x: 50,
            y: -400,
        }
    }

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
           opacity: 1,
           x: -150,
           y: 80,
           transition: { duration: 1},
        }
    }

    const variants = {
        initial: {
            opacity: 0,
            x: 300,
            y: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 2},
            x: 0,
            y: 0,
        },
        exit: {
            opacity: 0,
            x: 400,
            transition: { duration: 1},
        }
    }

    const transTitle = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1, delay: 1.5},
        },
        exit: {
            opacity: 0,
            transition: { duration: 1},
        }
    }

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6
    }

    const shootingStar = { //Pour comete
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { duration: 1}
        },
        exit: {
           opacity: 0,
           transition: { duration: 1}
        }
    }

    return (

        <div className="home-page">

            <DotsIndic/>

            <Mouse/>
            
            <motion.div className="divMenu" initial="initial" animate="visible" exit="exit" variants={sunTrans} transition={sunTrans}>
                <img id="sun" className="hover" src={sun}/>
                <SuperNavMenu />
            </motion.div>



            <div className="content-page">

                <motion.div className="presentation-name" initial="initial" animate="visible" exit="exit" variants={variants} 
                whileHover={
                    {
                        x: 40,
                        transition: { duration: 0.5 },
                        }
                }
                whileTap={
                    {
                        scale: 0.5,
                        transition: { duration: 0.5 },
                        }
                }> 
                    <h1> Arnaud Pinçon</h1>
                    <div id="barre"></div>
                    <div id="barre2"></div>
                    <h2> Web Developer & Designer </h2>
                </motion.div>

                <NavLink to="/arnaud-cv/portfolio" exact className="hover" activeClassName="nav-active" >
                    <motion.figure id="ePortfolio" className="planete" initial="initial" animate="visible" exit="exit" variants={earthTrans}   
                       /*  whileHover={
                            {
                                x: 10,
                                transition: { duration: 1 },
                                }
                        } */
                        whileTap={
                            {
                                scale: 3,
                                transition: { duration: 0.5 },
                                }
                        }>
                        <img id="earth" className="hover" src={earth}/>

                        <motion.figcaption id="titlePortfolio" initial="initial" animate="visible" exit="exit" variants={transTitle}>portfolio</motion.figcaption>

                    </motion.figure>
                </NavLink>

                <NavLink to="/arnaud-cv/contact" exact className="hover" activeClassName="nav-active">
                    <motion.figure id="mContact" className="planete"  initial="initial" animate="visible" exit="exit" variants={moonTrans}
                        /* whileHover={
                            {
                                x: -10,
                                y: -10,
                                transition: { duration: 1 },
                                }
                        } */
                        whileTap={
                            {
                                scale: 5,
                                transition: { duration: 0.5 },
                                }
                        }>
                        <img id="moon" className="hover" src={moon}/>
                        <motion.figcaption id="titleContact" initial="initial" animate="visible" exit="exit" variants={transTitle}>contact</motion.figcaption>
                    </motion.figure>
                </NavLink>

                <NavLink to="/arnaud-cv/about" exact className="hover" activeClassName="nav-active">
                    <motion.figure id="vAbout" className="planete" initial="initial" animate="visible" exit="exit" variants={venusTrans}
                        /* whileHover={
                            {
                                x: 20,
                                y: 10,
                                transition: { duration: 1}
                                }
                        } */
                        whileTap={
                            {
                                scale: 5,
                                transition: { duration: 0.5 },
                                }
                        }>
                        <img id="venus" className="hover" src={venus} />
                        <motion.figcaption id="titleAbout" initial="initial" animate="visible" exit="exit" variants={transTitle}>about</motion.figcaption>
                    </motion.figure>     
                </NavLink>

            </div>
            <motion.section initial="initial" animate="visible" exit="exit" variants={shootingStar}>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
            </motion.section>
        </div>
    );
};

export default Home;