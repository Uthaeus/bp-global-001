import { Link } from "react-router-dom";

function Register() {

    return (
        <div className="register">
            <h1 className="register-title">Register</h1>

            <Link to='/auth/login' className='register-link'>login</Link>
        </div>
    );
}

export default Register;