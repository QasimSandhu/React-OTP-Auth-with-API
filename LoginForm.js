import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setLoginEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setLoginPassword(e.target.value);
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const loginData = {
            loginEmail: loginEmail,
            loginPassword: loginPassword
        };
        console.log(loginData, "Login Data");

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storeduserName = localStorage.getItem('userName');

        if (storedEmail === loginEmail && loginPassword === storedPassword) {
            console.log(`Welcome ${storeduserName}`, loginData);
            navigate('/Welcome');
        } else {
            console.log('Email or password is incorrect.');
        }
    };

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Student Login Form</h2>
                                <form className="row g-3 my-3" onSubmit={handleSubmitLogin}>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" name="loginEmail" placeholder="Email" value={loginEmail} onChange={handleEmailChange} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" name="loginPassword" placeholder="Password" value={loginPassword} onChange={handlePasswordChange} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="text-center mt-3">Don't have an account?{" "}
                                            <Link to="/SignupForm" className="btn btn-link">SignUp Form</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
