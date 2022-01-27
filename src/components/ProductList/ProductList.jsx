import React, { useEffect, useState } from 'react';


import fetchProducts from '../../services/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.map((product , index) => (
                <h1 key={index}> {product.name}</h1>
            ))}
        </div>
    );
};

export default ProductList;
