import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    const { user } = useAuth();
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {
        const url = `https://murmuring-wave-81699.herokuapp.com/oneCustomerProducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProducts(data));
    }, [])
    return (
        <div>

            <h4>My Products</h4>
            <div className="myProduct-container">


                {

                    myProducts.map(myProduct => <MyProduct
                        key={myProduct._id}
                        myProduct={myProduct}
                    ></MyProduct>)
                }
            </div>
        </div>

    );
};

export default MyProducts;