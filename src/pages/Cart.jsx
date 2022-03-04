import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import Error from '../components/Loaders/Error';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';


const Cart = () => {
    // window.scroll(0, 0);
    const id = useParams().id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const total = cartItems.reduce((total, item) =>
    total + item.qty * item.price, 0).toLocaleString();

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const HandleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleCheckOut = () => {
        navigate(`/login?redirect=shipping`);
    }

    return (

        <>
            {cartItems.length === 0 ? (
                <div style={{ background: 'orange' }}>
                    <Error message={'Your Cart Is Empty'} />
                    <Link to={'/'}>SHOP NOW</Link>
                </div>
            ) : (
                <>
                    <div className="">
                        Total Cart Products
                        <Link className="" to="/cart">
                            ({cartItems.length})
                        </Link>
                    </div>


                    {cartItems.map((item, index) => (

                        <div className="" key={index} style={{ display: 'flex' }}>
                            <button
                                onClick={() => HandleRemoveFromCart(item.product)}>
                                X
                            </button>
                            <div className="">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="">
                                <Link to={`/products/${item.product}`}>
                                    <h4>{item.title}</h4>
                                </Link>
                            </div>
                            <div className="">
                                <h6>QUANTITY</h6>
                                <select
                                    value={item.qty}
                                    onChange={(e) =>
                                        dispatch(addToCart(item.product,
                                            Number(e.target.value)))}>
                                    {[...Array(item.stock).keys()].map((x) => (
                                        <option key={x+1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="">
                                <br />
                                <h6>PRICE</h6>
                                <h4>${item.price}</h4>
                            </div>
                        </div>
                    ))}




                    <div className="total">
                        <span className="sub">total:</span>
                        <span className="total-price">${total}</span>
                    </div>
                    <hr />
                    <div className="cart-buttons d-flex align-items-center row">
                        <Link to="/" className="col-md-6 ">
                            <button>Continue To Shopping</button>
                        </Link>
                        {total > 0 && (
                            <div >
                                <button onClick={handleCheckOut}>Checkout</button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
