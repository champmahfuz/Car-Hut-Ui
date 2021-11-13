import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const { user } = useAuth();
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const url = `https://murmuring-wave-81699.herokuapp.com/allOder`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])
    return (
        <div>
            <h4>All Products {allProducts.length}</h4>
            <div className="allProduct-container">

                {
                    allProducts.map(allProduct => <AllProduct
                        key={allProduct._id}
                        allProduct={allProduct}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;