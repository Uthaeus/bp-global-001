import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import logo from '../assets/images/bp_global_log.png';

// navbar-toggler

function MainNavigation() {
    const [showProducts, setShowProducts] = useState(false);

    function openProducts() {
        let element = document.getElementsByClassName('dropdown-toggle');
        let drop = document.getElementsByClassName('dropdown-menu');

        element.classList.add('show');
        
    }

    function closeProducts() {}

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
                    <p onMouseEnter={openProducts} onMouseLeave={closeProducts} className="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </p>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>

                    <NavLink to='/about' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About Us</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;