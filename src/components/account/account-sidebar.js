import { Link } from "react-router-dom";

export default function AccountSidebar() {

    return (
        <div className="account-sidebar">
            {/* account image */}

            <Link to='/account/profile' className="sidebar-link">Profile</Link>

            <Link to='/account/current-orders' className="sidebar-link">Current Orders</Link>

            <Link to='/account/history' className="sidebar-link">Order History</Link>

            <button className="sidebar-logout-btn">Logout</button>
        </div>
    );
}