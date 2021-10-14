import React from 'react';
import './signup.css';
import {LoginForm2} from '../../components/login-form/login-form';
import logo from '../../assets/whatsapp.png';

const signup = () => {
    return (
        <div className="container form-container card col-lg-4">
            <img className="chat-logo" src={logo} alt="" />
            <div className="row">
                <div className="col-lg-12">
                    <div>
                        <p className="welcome-head">Welcome To Chat<span className="now">Now.</span></p>
                    </div>
                    <div>
                        <LoginForm2/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;