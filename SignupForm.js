import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        if (!userName || !email || !password) {
            console.error("Please fill out all the fields");
            return;
        }
        const formData = { userName, email, password };
        console.log(formData, "FormData Signup Form Submit");

        // Save formData to local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('userName', userName);

        // api signup
        axios.post('https://dev-lokichat-api.renesistechdemo.com/api/auth/register', {
            userName: userName,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Your account has been created:', response.data);
                navigate('/Otp');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Sign Up</h2>
                                <form className="row g-3 my-3" onSubmit={handleSubmitSignUp}>
                                    <div className="col-6">
                                        <label htmlFor="inputUserName" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="inputUserName" name="usertName" placeholder="User Name" value={userName} onChange={handleUserNameChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="text-center mt-3">Already have an account?{" "}
                                            <Link to="/LoginForm" className="btn btn-link">Login Form</Link>
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

export default SignupForm;
