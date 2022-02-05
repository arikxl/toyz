import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { singleProduct } from '../redux/actions/productActions';

const ProductItemStyled = styled.section`
    img {
        width: 200px;
        height: 200px;
    }
`;

const ProductItem = () => {

    const id = useParams().id;
    const dispatch = useDispatch();
    const productItemFromStore = useSelector((state) => state.productItem)
    const { error, loading, product } = productItemFromStore;
    const { _id, img, title, price } = product;

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [dispatch, id])

    return (
        <ProductItemStyled>
            {loading ? (<Loader />)
                : error ? (<Error message={error} />)
                    : (
                        <>
                            <h1>
                                id:{_id}
                                <br />
                                {title}
                            </h1>
                            <p>{price}</p>
                            <img src={img} alt="" />

                            <Link to={'/'}>
                                <button>🏠</button>
                            </Link>
                        </>
                    )}
        </ProductItemStyled>
    );
};

export default ProductItem;
