import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submitHandler = (data) => {

        console.log('register submit data', data);
        navigate('/');
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Register</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>

                <div className="form-group">
                    <label htmlFor="username">Username*</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control auth-input"
                        {...register("username", { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control auth-input"
                        {...register("email", { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control auth-input"
                        {...register("password", { required: true })}
                    />
                </div>

                <button type="submit" className="auth-submit">register</button>
            </form>

            <Link to='/auth/login' className='auth-link'>login</Link>
        </div>
    );
}

export default Register;