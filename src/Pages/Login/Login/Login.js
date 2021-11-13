import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>

            <br /><br />
            <h2>Please Login</h2>
            <br /><br /><br />
            <div className="container">
                {user?.email &&
                    [

                        'success',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            Login {variant}successfully!
                        </Alert>
                    ))
                }

                {authError &&
                    [

                        'danger',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            {authError}
                        </Alert>
                    ))
                }
                <form onSubmit={handleLoginSubmit}>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            name="email"
                            onChange={handleOnChange}
                            aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            name="password"
                            onChange={handleOnChange}
                            id="exampleInputEmail1" required />
                        {/* <div className="row-mb-3 text-danger"></div> */}
                        <br />
                        <button type="submit" className="btn btn-primary">Sign In</button>

                    </div>


                </form >
                <p>-------------------------------</p>
                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary"> Google Sign In</button>
            </div>
            <Link to="/register">New User?Please Register</Link>
        </div>
    );
};

export default Login;