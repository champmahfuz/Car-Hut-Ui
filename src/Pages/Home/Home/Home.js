import React, { useEffect, useState } from 'react';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://car-hut-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
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
            <Albums></Albums>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;