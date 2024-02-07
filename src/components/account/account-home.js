import { Link } from "react-router-dom";

export default function AccountHome() {

    return (
        <>
            <h1>Account Home</h1>
            <Link to='/account/profile'>Profile</Link>
        </>
    );
}