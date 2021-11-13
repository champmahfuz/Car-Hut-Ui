import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const MyProduct = ({ myProduct }) => {
    const { _id, name, price, description, username, status, email } = myProduct;
    return (
        // <div className="my-product">
        //     <p>{email}</p>
        //     <p>{status}</p>
        //     <p>{name}</p>
        //     <p>{username}</p>
        //     <p>{description}</p>
        //     <h5>Price: {price}</h5>
        // </div>
        <>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">
                <Card className="mx-3  ">

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>Name: {username}</p>
                        <p>Email: {email}</p>
                        <p>Price :{price}</p>
                        <p>Status :{status}</p>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};


export default MyProduct;