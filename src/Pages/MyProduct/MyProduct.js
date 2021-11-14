import React from 'react';


const MyProduct = ({ myProduct }) => {
    const { _id, name, price, description, username, status, email } = myProduct;
    return (
        <>

            <tr>

                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{price}</td>

            </tr>
        </>
    );
};


export default MyProduct;