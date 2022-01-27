import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            {product.name}
        </div>
    );
};

export default ProductItem;
