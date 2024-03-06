import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = (data) => {

        console.log('register submit data', data);
        navigate('/');
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Register</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="username" className="auth-label">Company Name *</label>
                            <input
                                type="text"
                                id="companyName"
                                className="form-control auth-input"
                                {...register("companyName", { required: true })}
                            />
                            {errors.companyName && <p className="auth-error">Company Name is required</p>}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email" className="auth-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control auth-input"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="auth-error">Email is required</p>}
                        </div>
                    </div>
                </div>

                <h4 className="auth-subtitle">Billing Address</h4>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="street1" className="auth-label">Street Address *</label>
                            <input
                                type="text"
                                id="street1"
                                className="form-control auth-input"
                                {...register("street1", { required: true })}
                            />
                            {errors.street1 && <p className="auth-error">Street Address is required</p>}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="country" className="auth-label">Country *</label>
                            <select id="country" className="form-control auth-input" {...register("country", { required: true })}>
                                <option value="">Select Country</option>
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="mexico">Mexico</option>
                            </select>
                            {errors.country && <p className="auth-error">Country is required</p>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="street2" className="auth-label">Street Address 2</label>
                            <input
                                type="text"
                                id="street2"
                                className="form-control auth-input"
                                {...register("street2")}
                            />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="suite" className="auth-label">Suite</label>
                            <input
                                type="text"
                                id="suite"
                                className="form-control auth-input"
                                {...register("suite")}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="city" className="auth-label">City *</label>
                            <input
                                type="text"
                                id="city"
                                className="form-control auth-input"
                                {...register("city", { required: true })}
                            />
                            {errors.city && <p className="auth-error">City is required</p>}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="postalCode" className="auth-label">Postal Code *</label>
                            <input
                                type="text"
                                id="postalCode"
                                className="form-control auth-input"
                                {...register("postalCode", { required: true })}
                            />
                            {errors.postalCode && <p className="auth-error">Postal Code is required</p>}
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="state" className="auth-label">State *</label>
                            <select id="state" className="form-control auth-input" {...register("state", { required: true })}>
                                <option value="">Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                            </select>
                            {errors.state && <p className="auth-error">State is required</p>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="contactName" className="auth-label">Contact Name *</label>
                            <input
                                type="text"
                                id="contactName"
                                className="form-control auth-input"
                                {...register("contactName", { required: true })}
                            />
                            {errors.contactName && <p className="auth-error">Contact Name is required</p>}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="contactPhone" className="auth-label">Contact Phone *</label>
                            <input
                                type="text"
                                id="contactPhone"
                                className="form-control auth-input"
                                {...register("contactPhone", { required: true })}
                            />
                            {errors.contactPhone && <p className="auth-error">Contact Phone is required</p>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="contactEmail" className="auth-label">Contact Email</label>
                            <input
                                type="email"
                                id="contactEmail"
                                className="form-control auth-input"
                                placeholder="Optional"
                                {...register("contactEmail")}
                            />
                        </div>
                    </div>

                    <div className="col-md-6" />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="password" className="auth-label">Password *</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control auth-input"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className="auth-error">Password is required</p>}
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="auth-label">Confirm Password *</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control auth-input"
                                {...register("confirmPassword", { required: true })}
                            />
                            {errors.confirmPassword && <p className="auth-error">Confirm Password is required</p>}
                        </div>

                    </div>
                </div>

                <button type="submit" className="auth-submit">register</button>
            </form>

            <p className="auth-alt">already have an account? <Link to='/auth/login' className='auth-link'>login here</Link></p>
        </div>
    );
}

export default Register;