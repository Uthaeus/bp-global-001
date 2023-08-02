import { NavLink, Link } from "react-router-dom";

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
                    <NavLink to='/' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Products</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About Us</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;