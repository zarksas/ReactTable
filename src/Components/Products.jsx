import React from 'react';
import products from '../products';
import Product from './Product';


const Products = () => {
    return (
        <div>
           <table>
              {products.map((product) => {
                  return <Product id={product.id} name={product.name} price={product.price} left={product.left} image={product.image}/>
              })}
            </table> 
        </div>
    );
};

export default Products;