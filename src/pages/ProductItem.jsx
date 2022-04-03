import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { singleProduct } from '../redux/actions/productActions';
import Rating from '../components/Rating/Rating';
import { PRODUCT_CREATE_REVIEW_RESET } from '../redux/constants/productsConstants';

const ProductItemStyled = styled.section`
  min-height:80vh ;
  div {
      margin-bottom:15px ;
  }

    img {
        width: 200px;
        height: 200px;
    }
`;

const ProductItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useParams().id;

    const productItemFromStore = useSelector((state) => state.productItem)
    const { error, loading, product } = productItemFromStore;
    const { _id, img, title, price, stock, rating, reviewsCount } = product;

    const userLogin = useSelector((state) => state.userLogin).userInfo;
    const productCreateReview = useSelector((state) => state.productCreateReview);
    const { error: errorCreateReview,
        loading: loadingCreateReview,
        success: successCreateReview,
    } = productCreateReview;

    const [quantity, setQuantity] = useState(1);
    const [userRating, setUserRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (successCreateReview) {
            alert('Review created successfully');
            setUserRating(0);
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }


        dispatch(singleProduct(id))
    }, [dispatch, id, successCreateReview])

    const handleAddToCart = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?qty=${quantity}`);
    }

    return (
        <ProductItemStyled>
            {loading ? (<Loader />)
                : error ? (<Error message={error} />)
                    : (
                        <div>
                            <h1>
                                id:{_id}
                                <br />
                                {title}
                            </h1>
                            <p>price: ${price}</p>
                            {stock > 0 ? (
                                <p>stock:{stock}</p>) : (<p>OUT OF STOCK</p>)
                            }
                            <Rating rating={rating} reviewsCount={reviewsCount} />


                            {stock > 0 && (
                                <div >
                                    <h6>Quantity</h6>
                                    <select value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}>
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
                            )}
                            <img src={img} alt="" />
                            <br />
                            <Link to={'/'}>
                                <button>🏠</button>
                            </Link>
                        </div>
                    )}
            <hr />
            <div>
                <h3>Reviews</h3>
                {
                    product.reviews.length === 0 && (
                        <Error message={'No reviews yet'} />
                    )
                }
                {
                    product.reviews.map((review) => (
                        <div key={review._id}>
                            <p>{review.name}</p>
                            <Rating rating={review.rating} />
                            <p>{moment(review.createdAt).calendar()}</p>
                            <div>
                                {review.comment}
                            </div>
                        </div>
                    ))
                }





            </div>




        </ProductItemStyled>
    );
};

export default ProductItem;
