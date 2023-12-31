import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import logo from '../assets/images/bp_global_log.png';

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <Link to='/' className="navigation-logo-link" end>
                    <img src={logo} alt='nav-logo' width='80%' />
                </Link>
            </div>

            <div className="main-navigation-right">
                <p className="navigation-phone">800-555-5555</p>

                <div className="navigation-links-wrapper">
                    <div className="products-dropdown">
                        <p id='products-dropdown' className="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </p>
                        <ul id='products-dropdown-menu' className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>

                    <NavLink to='/about' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About Us</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;