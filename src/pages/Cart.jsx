import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';

import { addToCart } from '../redux/actions/cartActions';


const Cart = () => {
    window.scroll(0,0);
    const id = useParams().id;
    console.log('id:', id)
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(id) {
            dispatch(addToCart( id, qty))
        }
    },[dispatch, id , qty])

    return (

        <div>
            <h1>qty : {qty}</h1>
            {/* <h1>cart{quantity}</h1> */}
            <Link to={'/'}>
                <button>🏠</button>
            </Link>
        </div>
    );
};

export default Cart;
