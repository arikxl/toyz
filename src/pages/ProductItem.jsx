import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { singleProduct } from '../redux/actions/productActions';
import Rating from '../components/Rating/Rating';

const ProductItemStyled = styled.section`
    img {
        width: 200px;
        height: 200px;
    }
`;

const ProductItem = () => {
    const [quantity, setQuantity] = useState(0);
    const id = useParams().id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productItemFromStore = useSelector((state) => state.productItem)
    const { error, loading, product } = productItemFromStore;
    const { _id, img, title, price, stock, rating, reviewsCount } = product;

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [dispatch, id])

    const handleAddToCart = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?qty=${quantity}`);
        console.log(quantity)
    }

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
                            {stock > 0 ? (
                                <p>stock:{stock}</p>) : (<p>OUT OF STOCK</p>)
                            }
                            <Rating rating={rating} reviewsCount={reviewsCount} />


                            {stock > 0 ? (
                                <div style={{ border: '1px solid hotpink' }}>
                                    <h6>Quantity</h6>
                                    <select>
                                        {[...Array(stock).keys()].map((index) => (
                                            <option key={index} value={index + 1}>
                                                {index + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <button onClick={handleAddToCart}>
                                        add2cart
                                    </button>
                                </div>
                            ) : null
                            }


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
