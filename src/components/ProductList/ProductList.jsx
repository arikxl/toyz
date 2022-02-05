import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductService } from '../../services/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.fetchProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.length === 0 && 'LOADING...'}
            {products.map((product, index) => (
                <Link to={`/products/${product._id}` } key={index} >
                    <h1> {product.title}</h1>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
