import React from 'react';

const Product = (props) => {
    return (
        <table>
        <tr><th>Id</th><th>Price</th><th>Left</th><th>Image</th></tr>
        <tr><td>{props.id}</td><td>{props.price}</td><td>{props.left}</td><td><img src={props.image} alt="no"/></td></tr>
        </table>

        

       
    );
};

export default Product;