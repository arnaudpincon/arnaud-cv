import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000},
    }
  }
};

const sommaire = ["Home", "Portfolio", "About", "Contact"];
const adresses = ["/arnaud-cv/", "/arnaud-cv/portfolio", "/arnaud-cv/about", "/arnaud-cv/contact"]

const colors = ["#724aee", "#285fac", "#d56335", "#ffffff"];

export const MenuItem = ({ i, toggle }) => {
  const styleCadre = { border: `2px solid ${colors[i]}` };
  const styleP = { backgroundColor: `${colors[i]}` };
  return (
    <NavLink to={adresses[i]} exact className="elementBurger" activeClassName="nav-active" onClick={toggle}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
      >
        <div className="icon-placeholder" style={styleP} />
        <div className="text-placeholder" style={styleCadre}> 
            <div className="text-inPlaceholder"> {sommaire[i]}  </div>
        </div>
      </motion.li>
    </NavLink>
  );
};
