import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


import Error from '../Loaders/Error';
import Loader from '../Loaders/Loader/Loader';
import { listProduct } from '../../redux/actions/productActions';

const ProductListStyled = styled.section`
    width: 80%;
    margin: 0 auto ;

    .item {
        margin: 20px 0;
        width: 200px ;
        background-color: red ;
    }
    
`;


const ProductList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProduct)
    }, [dispatch])

    const productsFromStore = useSelector((state) => state.productList)
    const { error, loading, products } = productsFromStore;

    return (
        <ProductListStyled>
            {loading ? (<div style={{ position: 'relative' }}><Loader /></div>)
                : error ? (<Error message={error} />)
                    : (
                        <>
                            {products.map((product, index) => (
                                <div className='item'>
                                    <Link to={`/products/${product._id}`} key={index}>
                                        <h1> {product.title}</h1>
                                    </Link>
                                </div>
                            ))}
                        </>
                    )
            }
        </ProductListStyled>
    );
};

export default ProductList;
