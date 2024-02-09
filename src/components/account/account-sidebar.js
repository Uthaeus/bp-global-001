import { Link } from "react-router-dom";

import sidebarImage from '../../assets/images/forest_image.png';

export default function AccountSidebar() {

    return (
        <div className="account-sidebar">
            {/* account image */}

            <img src={sidebarImage} className="sidebar-image" alt='account image' width='100%' />

            <Link to='/account/profile' className="sidebar-link">Profile</Link>

            <Link to='/account/current-orders' className="sidebar-link">Current Orders</Link>

            <Link to='/account/history' className="sidebar-link">Order History</Link>

            <Link to='/account' className="sidebar-link">Account Home</Link>

            <button className="sidebar-logout-btn">Logout</button>
        </div>
    );
}