import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
            <h4>All Order {allProducts.length}</h4>
            <div className="allProduct-container">
                <Table responsive>
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allProducts.map(allProduct => <AllProduct
                                key={allProduct._id}
                                allProduct={allProduct}
                            ></AllProduct>)
                        }
                    </tbody>


                </Table>


            </div>
        </div>
    );
};

export default AllProducts;