import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../Loaders/Error';
import Loader from '../Loaders/Loader/Loader';
import { listProduct } from '../../redux/actions/productActions';

const ProductList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProduct)
    }, [dispatch])

    const productsFromStore = useSelector((state) => state.productList)
    const { error, loading, products } = productsFromStore;

    return (
        <div>
            {loading ? (<div style={{ position: 'relative' }}><Loader /></div>)
                : error ? (<Error message={error} />)
                    : (
                        <>
                            {products.map((product, index) => (
                                <Link to={`/products/${product._id}`} key={index}>
                                    <h1> {product.title}</h1>
                                </Link>
                            ))}
                        </>
                    )
            }
        </div>
    );
};

export default ProductList;
