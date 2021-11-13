import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>

            <br /><br />
            <h2>Please Register</h2>
            <br /><br /><br />
            <div className="container">
                {user?.email &&
                    [

                        'success',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            User created {variant}successfully!
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

                {!isLoading && <form onSubmit={handleLoginSubmit}>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text"
                            id="exampleInputName"
                            className="form-control"
                            name="name"
                            onBlur={handleOnBlur}
                        />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            name="email"
                            onBlur={handleOnBlur}
                            aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            name="password"
                            onBlur={handleOnBlur}
                            id="exampleInputEmail1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Re-type your Password</label>
                        <input type="password" className="form-control"
                            name="password2"
                            onBlur={handleOnBlur}
                            id="exampleInputEmail1" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>


                </form >}
                <br />
                {isLoading && <Spinner animation="border" />}


            </div>
            <Link to="/login">Already Register?Please Login</Link>
        </div>
    );
};

export default Register;