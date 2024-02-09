import { Link } from "react-router-dom";

function Profile() {

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>

            {/* account profile information */}

            <Link to='/account/edit-profile' className="edit-profile-link">Edit Profile</Link>
        </div>
    );
}

export default Profile;