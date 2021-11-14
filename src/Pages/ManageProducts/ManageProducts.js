import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://murmuring-wave-81699.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://murmuring-wave-81699.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }
    return (
        <>
            <div className="manage">
                <h2 className="text-primary">Manage products</h2>
                <div className="manage-container">
                    {

                        products.map(product => <div key={product._id}>
                            <div className=" mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-5 g-5">
                                <Card className="mx-3 my-4  ">
                                    <Card.Img className="img" variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title key={product._id}>{product.name}</Card.Title>
                                        <h3>{product.price}</h3>
                                        <p>{product.description}</p>

                                        <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                                    </Card.Body>

                                </Card>
                            </div>

                        </div>)

                    }
                </div>
            </div>
        </>
    );
};

export default ManageProducts;