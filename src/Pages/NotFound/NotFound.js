import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <br />

            <Link to="/"> <Button variant="warning">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;