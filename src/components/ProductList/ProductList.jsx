import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


import Error from '../Loaders/Error';
import Loader from '../Loaders/Loader/Loader';
import { listProduct } from '../../redux/actions/productActions';
import { Pagination } from './Pagination';

const ProductListStyled = styled.section`
    width: 80%;
    margin: 0 auto ;

    .item {
        margin: 20px 0;
        width: 200px ;
    }
    
`;


const ProductList = (props) => {

    const dispatch = useDispatch();
    const { searchWord, pageNumber } = props;

    useEffect(() => {
        dispatch(listProduct(searchWord, pageNumber));
    }, [dispatch, searchWord, pageNumber]);

    const productsFromStore = useSelector((state) => state.productList)
    const { error, loading, products, page, pages } = productsFromStore;

    return (
        <>
            <ProductListStyled>
                {loading ? (<div style={{ position: 'relative' }}><Loader /></div>)
                    : error ? (<Error message={error} />)
                        : (
                            <>
                                {products.map((product) => (
                                    <div className='item' key={product._id}>
                                        <Link to={`/products/${product._id}`} >
                                            <h1> {product.title}</h1>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )
                }
            </ProductListStyled>
            <Pagination page={page} pages={pages} searchWord={searchWord ? searchWord : ''}/>
        </>
    );
};

export default ProductList;
