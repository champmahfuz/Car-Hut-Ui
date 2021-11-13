// import React, { useEffect, useState } from 'react';

// const ManageProducts = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('https://murmuring-wave-81699.herokuapp.com/products')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, [])
//     return (
//         <div>
//             <h2>This is Manage Products</h2>
//             {
//                 products.map(product => <div key={product.id}>
//                     <h3>{product.name}</h3>
//                     <button>Delete</button>
//                 </div>)
//             }
//         </div>
//     );
// };

// export default ManageProducts;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageProducts.css';

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
        <div className="manage">
            <h2 className="text-primary">Manage products</h2>
            <div className="manage-container">
                {

                    products.map(product => <div key={product._id}>
                        <div className="single-item">
                            <img src={product.img} alt="" />
                            <h3>{product.name}</h3>

                            <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                            <br /><br />
                            <Link to="/addProduct"><button className="btn btn-success">Add products</button> </Link>
                        </div>

                    </div>)

                }
            </div>
        </div>
    );
};

export default ManageProducts;