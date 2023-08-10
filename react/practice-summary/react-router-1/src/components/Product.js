import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ selectedProduct, selectById }) => {

    // THIS IS A STRING!!!
    const { id } = useParams();

    //   We have to check if the selected product is the same as the one in the URL.
    // We also need to be sure we are checking for a number, not a string.
    if (!selectedProduct || selectedProduct.id !== Number(id)) {
        selectById(Number(id));
    }

    return (
        <div
            style={{
                border: "2px solid black",
                width: "50%"
            }}
        >
            {selectedProduct ? (
                <div>
                    <h1>{selectedProduct.name}</h1>
                    <h2>${selectedProduct.price}</h2>
                    <p>{selectedProduct.desc}</p>
                </div>
            ) : (
                <h1>Product not found</h1>
            )}
        </div>
    );
};

export default Product;