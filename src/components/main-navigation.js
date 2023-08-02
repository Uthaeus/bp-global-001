import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <Link to='/' end>logo here</Link>
            </div>

            <div className="main-navigation-right">
                <div className="navigation-phone-wrapper">
                    <p className="navigation-phone">800-555-5555</p>
                </div>

                <div className="navigation-links-wrapper">
                    <NavLink to='/' end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Products</NavLink>
                    <NavLink to='/' end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About Us</NavLink>
                    <NavLink to='/' end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;