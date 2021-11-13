import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://murmuring-wave-81699.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // setEmail('');
                    console.log(data);
                    setSuccess(true);
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <div className="container">
                <form onSubmit={handleAdminSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email"
                            onBlur={handleOnBlur}
                            class="form-control" id="exampleInputEmail1" />

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br />
                {success &&
                    [

                        'success',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            Make Admin {variant}successfully!
                        </Alert>
                    ))
                }
            </div>
        </div>
    );
};

export default MakeAdmin;