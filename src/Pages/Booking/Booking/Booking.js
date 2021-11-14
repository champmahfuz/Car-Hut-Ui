import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Booking = () => {
    const titleRef = useRef();
    const nameRef = useRef();
    const userRef = useRef();
    const emailRef = useRef();
    const statusRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const { user } = useAuth();
    const [myProduct, setMyProduct] = useState({});
    const { id } = useParams();
    const { productId } = useParams();

    useEffect(() => {
        const url = `https://murmuring-wave-81699.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProduct(data));
    }, [])
    console.log(myProduct);
    const handleMyProduct = e => {

        // const title = titleRef.current.value;

        const name = nameRef.current.value;
        const username = userRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const status = statusRef.current.value;
        const newProduct = { username, email, name, price, description, status };

        fetch('https://murmuring-wave-81699.herokuapp.com/products/myProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Add Product')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>

            <div className=" mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-5 g-5">


                <Card className="mx-3 my-4  ">
                    <Card.Img className="img" variant="top" src={myProduct.img} />
                    <Card.Body>
                        <Card.Title key={myProduct._id}>{myProduct.title}</Card.Title>
                        <h3>{myProduct.name}</h3>
                        <p>{myProduct.description}</p>


                    </Card.Body>


                    <Form className="m-3" onSubmit={handleMyProduct}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" value={user.displayName} ref={userRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" value={user.email} ref={emailRef} placeholder=" " />
                            <Form.Control type="text" hidden value="Pending" ref={statusRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={myProduct.name} ref={nameRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={myProduct.description} ref={descriptionRef} placeholder=" " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={myProduct.price} ref={priceRef} placeholder=" " />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <Link to="/products"><button className="mx-3 btn btn-dark">View All</button> </Link>
                    </Form>
                </Card>
            </div >
        </>
    );
};

export default Booking;