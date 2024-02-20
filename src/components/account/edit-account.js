import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function EditAccount({ user }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {

        reset({
            email: user.email,
            password: '',
            confirmPassword: '',
            billingAddress: user.billingAddress || '',
        })
    }, [user]);

    const submitHandler = (data) => {

        console.log('edit account submit data', data);
        navigate('/account');
    }

    return (
        <div className="edit-account">
            <h1>Edit Account</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

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

                <div className="form-group">
                    <label htmlFor="confirmPassword" className="auth-label">Confirm Password *</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control auth-input"
                        {...register("confirmPassword", { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="billingAddress" className="auth-label">Billing Address</label>
                    <input 
                        type="text"
                        id="billingAddress"
                        className="form-control auth-input"
                        {...register("billingAddress")}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}