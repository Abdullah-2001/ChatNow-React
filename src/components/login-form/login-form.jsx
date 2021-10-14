import React from 'react';
import './login-form.css';
import { NavLink } from 'react-router-dom'

export const LoginForm = () => {

    return (

        <div>

            <div>

                <form type="submit">

                    <div className="mt-4">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username" />
                    </div>

                    <div className="mt-4 mb-4">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                    </div>

                    <div className="btn-container">
                        <NavLink to="/chat"><button className="login-btn col-12 mt-3">Login</button></NavLink>
                    </div>

                </form>

            </div>

        </div>

    )

}

export const LoginForm2 = () => {

    return (

        <div>

            <div>

                <form type="submit">

                    <div className="mt-4">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username" />
                    </div>

                    <div className="mt-4 mb-4">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                    </div>

                    <div className="btn-container">
                        <button className="login-btn col-12 mt-3">Signup</button>
                    </div>

                </form>

            </div>

        </div>

    )

}