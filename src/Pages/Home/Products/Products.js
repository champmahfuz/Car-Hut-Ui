import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://car-hut-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="product-item">
            <h2 className="text-primary mt-5">Our Collection</h2>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;