import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Welcome from "./Welcome";
import Otp from "./Otp";

const App = () => {

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<LoginForm />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="/SignupForm" element={<SignupForm />} />
                    <Route path="/otp" element={<Otp />} />
                    <Route path="/Welcome" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
