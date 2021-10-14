import React from 'react';
import './login.css';
import logo from '../../assets/whatsapp.png';
import { LoginForm } from '../../components/login-form/login-form';
import { NavLink } from 'react-router-dom'

const signup = () => {
    return (
        <div>
            <div className="container form-container card col-lg-4">
                <img className="chat-logo" src={logo} alt="" />
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <p className="welcome-head">Welcome To Chat<span className="now">Now.</span></p>
                        </div>
                        <div>
                            <LoginForm />
                        </div>
                        <div className="mt-5">
                            <p style={{ textAlign: "center", color: "grey" }}>Don't have an account ? <NavLink to="/signup"><span className="signup" style={{ color: "black" }}>Sign up</span></NavLink> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;