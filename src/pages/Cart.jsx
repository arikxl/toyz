import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Cart = () => {

    const quantity = useParams().qty;
    console.log('useParams():', useParams())
    console.log('quantity:', quantity)

    return (

        <div>
            <h1>cart{quantity}</h1>
            <Link to={'/'}>
                <button>🏠</button>
            </Link>
        </div>
    );
};

export default Cart;
