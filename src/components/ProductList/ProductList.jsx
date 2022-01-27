import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../../pages/ProductItem';


import { ProductService } from '../../services/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.fetchProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.map((product, index) => (
                <Link to={`/products/${product._id}` } key={index} >
                    <h1> {product.name}</h1>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
