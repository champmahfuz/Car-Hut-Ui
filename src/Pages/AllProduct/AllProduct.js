import React from 'react';
import { Card } from 'react-bootstrap';


const AllProduct = ({ allProduct }) => {
    const { _id, name, price, description, username, status, email } = allProduct;
    return (
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

export default AllProduct;