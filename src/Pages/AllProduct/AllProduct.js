import React, { useRef } from 'react';
import { Card, Form, Table } from 'react-bootstrap';


const AllProduct = ({ allProduct }) => {
    const { _id, name, price, description, username, status, email } = allProduct;
    const idRef = useRef()
    const handleStatusChange = e => {


        // const status = statusRef.current.value;
        const id = idRef.current.value;
        const pId = { id };
        console.log(id);
        const proced = window.confirm('Are You sure you want to Approved..?');
        if (proced) {


            fetch('https://murmuring-wave-81699.herokuapp.com/OrderInfo/status', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(pId)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Approved successfully, when you reload you can see approve status');

                    }
                })
        }
        e.preventDefault()
    }
    return (
        <>



            <tr>

                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>
                    <button className="status btn btn-warning" onClick={handleStatusChange}>{status}
                        <Form.Control ref={idRef} hidden value={_id} type="text" placeholder="Enter title" /></button>
                </td>
            </tr>

        </>
    );
};

export default AllProduct;