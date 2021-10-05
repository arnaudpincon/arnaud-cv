import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="navigation">
            {/* <div> Arnaud Pinçon </div> */}
            <ul className="navbar-main">
                <NavLink to="/arnaud-cv/" exact className="hover" activeClassName="nav-active">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/arnaud-cv/portfolio" exact className="hover" activeClassName="nav-active">
                    <li>Portfolio</li>
                </NavLink>
                
                {/* <li className="nav-main-onglet">Onglet</li>
                <ul className="nav-onglets">
                    <NavLink to="/onglet-1" className="hover" activeClassName="nav-active">
                        <li>Onglet 1</li>
                    </NavLink>
                    <NavLink to="/onglet-2" className="hover" activeClassName="nav-active">
                        <li>Onglet 2</li>
                    </NavLink>
                    <NavLink to="/onglet-3" className="hover" activeClassName="nav-active">
                        <li>Onglet 3</li>
                    </NavLink>
                </ul> */}
                <NavLink to="/arnaud-cv/about" exact className="hover" activeClassName="nav-active">
                    <li>About</li>
                </NavLink>
                <NavLink to="/arnaud-cv/contact" exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;