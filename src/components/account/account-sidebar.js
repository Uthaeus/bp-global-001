import { Link } from "react-router-dom";

import sidebarImage from '../../assets/images/overtime_image1.jpg';

export default function AccountSidebar() {

    return (
        <div className="account-sidebar">
            {/* account image */}

            <img src={sidebarImage} className="sidebar-image" alt='account image' width='100%' />

            <Link to='/account/profile' className="sidebar-link">Profile</Link>

            <Link to='/account/current-orders' className="sidebar-link">Current Orders</Link>

            <Link to='/account/history' className="sidebar-link">Order History</Link>

            <button className="sidebar-logout-btn">Logout</button>
        </div>
    );
}