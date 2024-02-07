import { Link } from "react-router-dom";

export default function AccountSidebar() {

    return (
        <>
            <div className="account-sidebar">
                <Link to='/account/profile'>Profile</Link>
            </div>
        </>
    );
}