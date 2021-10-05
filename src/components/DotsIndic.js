import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const DotsIndic = () => {

    useEffect(() => {

        var dot1 = document.querySelector('.dot-1');
        var dot2 = document.querySelector('.dot-2');
        var dot3 = document.querySelector('.dot-3');
        var dot4 = document.querySelector('.dot-4');
        const url = window.location.pathname;

        if (url === '/arnaud-cv/') {
            dot1.classList.add('dots-active');
        } else {
            dot1.classList.remove('dots-active');
        }
        
        if (url === '/arnaud-cv/portfolio') {
            dot2.classList.add('dots-active');
        } else {
            dot2.classList.remove('dots-active');
        }
        
        if (url === '/arnaud-cv/about') {
            dot3.classList.add('dots-active');
        } else {
            dot3.classList.remove('dots-active');
        }

        if (url === '/arnaud-cv/contact') {
            dot4.classList.add('dots-active');
        } else {
            dot4.classList.remove('dots-active');
        }

    }, []);

    const url = window.location.origin + '/';

    const transHome = { 
        initial: {
            opacity: 1,  
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
        },
        exit: {
           opacity: 1,
           transition: { duration: 1},
        }
    }

    const transPortfolio = { 
        initial: {
            opacity: 1,  
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
        },
        exit: {
           opacity: 1,
           transition: { duration: 1},
        }
    }

    const transAbout = {
        initial: {
            opacity: 1,  
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
        },
        exit: {
           opacity: 1,
           transition: { duration: 1},
        }
    }

    const transContact = {
        initial: {
            opacity: 1,  
        },
        visible: {
            opacity: 1,
            transition: { duration: 1},
        },
        exit: {
           opacity: 1,
           transition: { duration: 1},
        }
    }

    return (
        <div className="dotsIndic">
            <ul className="dots-list">
                <NavLink to="/arnaud-cv/" exact className="hover" activeClassName="nav-active" >
                    <motion.li className="dot dot-1 dot-ring" initial="initial" animate="visible" exit="exit" variants={transHome}></motion.li>
                </NavLink>
                <NavLink to="/arnaud-cv/portfolio" exact className="hover" activeClassName="nav-active" >
                    <motion.li className="dot dot-2 dot-ring" initial="initial" animate="visible" exit="exit" variants={transPortfolio}></motion.li>
                </NavLink>
                <NavLink to="/arnaud-cv/about" exact className="hover" activeClassName="nav-active" >
                    <motion.li className="dot dot-3 dot-ring" initial="initial" animate="visible" exit="exit" variants={transAbout}></motion.li>
                </NavLink>
                <NavLink to="/arnaud-cv/contact" exact className="hover" activeClassName="nav-active" >
                    <motion.li className="dot dot-4 dot-ring" initial="initial" animate="visible" exit="exit" variants={transContact}></motion.li>
                </NavLink>
            </ul> 
        </div>
    );
};

export default DotsIndic;











/*
    useEffect(() => {

        var dot1 = document.querySelector('.dot-1');
        var dot2 = document.querySelector('.dot-2');
        var dot3 = document.querySelector('.dot-3');
        var dot4 = document.querySelector('.dot-4');
        const url = window.location.pathname;
        console.log("c quoi : "+url.toString('/portfolio'));

        if (url === '/') {
            dot1.classList.add('dots-active');
            console.log("toto");
        } else {
            dot1.classList.remove('dots-active');
        }
        
        if (url === '/portfolio') {
            dot2.classList.add('dots-active');
            console.log("toto2");
        } else {
            dot2.classList.remove('dots-active');
        }
        
        if (url === '/about') {
            dot3.classList.add('dots-active');
        } else {
            dot3.classList.remove('dots-active');
        }

        if (url === '/contact') {
            dot4.classList.add('dots-active');
        } else {
            dot4.classList.remove('dots-active');
        }

    }, []);*/