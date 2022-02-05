import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: { 
            product: data._id,
            title: data.title,
            img: data.img,
            price: data.price,
            stock: data.stock,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}