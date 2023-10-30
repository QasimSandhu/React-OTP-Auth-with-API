import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const storedEmail = localStorage.getItem('email');
    const [email, setEmail] = useState(storedEmail || '');
    const [submitOtp, setSubmitOtp] = useState("");
    const navigate = useNavigate();

    const handleGetNewOTP = (e) => {
        e.preventDefault();
        axios.post('https://dev-lokichat-api.renesistechdemo.com/api/auth/request-otp', {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('OTP sent to your email address.', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleVerifyOTP = (e) => {
        setSubmitOtp(e.target.value);
        console.log("OTP submitted:", submitOtp);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitOtp = (e) => {
        e.preventDefault();
        console.log("OTP submitted:", submitOtp);

        axios.post('https://dev-lokichat-api.renesistechdemo.com/api/auth/verify-otp', {
            email: email,
            otp: parseInt(submitOtp)
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('OTP verified', response.data);
                navigate('/Welcome');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Enter OTP</h2>
                            <form onSubmit={handleSubmitOtp}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter OTP" value={submitOtp} onChange={handleVerifyOTP} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
                                    <button type="button" className="btn btn-primary btn-block my-3" onClick={handleGetNewOTP}>Get new OTP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
