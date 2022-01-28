import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ProductService } from '../services/products';


const ProductItem = () => {
    const id = useParams().id;

    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.fetchProduct(id)
            .then(data => setProduct(data))
    }, [id])

    return (
        <div>
            <h1>
                {product.name}
            </h1>

            <Link to={'/'}>
                <button>🏠</button>
            </Link>
        </div>
    );
};

export default ProductItem;
