import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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

            <h4>My Order Products</h4>
            <div className="myProduct-container">
                <Table responsive>
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>

                        </tr>
                    </thead>

                    <tbody>

                        {

                            myProducts.map(myProduct => <MyProduct
                                key={myProduct._id}
                                myProduct={myProduct}
                            ></MyProduct>)
                        }
                    </tbody>


                </Table>


            </div>
        </div>

    );
};

export default MyProducts;