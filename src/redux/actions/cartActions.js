import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {product} = await axios.get(`/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: { 
            product: product._id,
            title: product.title,
            img: product.img,
            price: product.price, 
            stock: product.stock,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}