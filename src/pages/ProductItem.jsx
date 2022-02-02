import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ProductService } from '../services/products';

const ProductItemStyled = styled.section`
    img {
        width: 200px;
        height: 200px;
    }
`;



const ProductItem = () => {
    const id = useParams().id;
    
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        ProductService.fetchProduct(id)
        .then(data => setProduct(data))
    }, [id])
    
    return (
        <ProductItemStyled>
            <h1>
                id:{product._id}
                <br />
                {product.title}
            </h1>
            <p>{product.price}</p>
            <img src={product.img} alt="" />

            <Link to={'/'}>
                <button>🏠</button>
            </Link>
        </ProductItemStyled>
    );
};

export default ProductItem;
