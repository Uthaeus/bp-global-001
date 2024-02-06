import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submitHandler = (data) => {

        console.log('login submit data', data);
        navigate('/');
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="email" className="auth-label">Email *</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control auth-input"
                        {...register("email", { required: true })}
                    />
                </div>

                <div className="form-group"> 
                    <label htmlFor="password" className="auth-label">Password *</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control auth-input"
                        {...register("password", { required: true })}
                    />
                </div>

                <button type="submit" className="auth-submit">login</button>
            </form>

            <p className="auth-alt">don't have an account? <Link to='/auth/register' className='auth-link'>register here</Link></p>
        </div>
    );
}

export default Login;