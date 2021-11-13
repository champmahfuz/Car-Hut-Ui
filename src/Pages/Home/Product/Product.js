import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (
        <div className="product pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success">Buy Now</button>
            </Link>
        </div>
    );
};

export default Product;