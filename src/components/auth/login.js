import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="login">
            <h1 className="login-title">Login</h1>

            <Link to='/auth/register' className='login-link'>register</Link>
        </div>
    );
}

export default Login;