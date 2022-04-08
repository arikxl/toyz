import axios from 'axios';

import { PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_ITEM_FAIL,
    PRODUCT_ITEM_REQUEST,
    PRODUCT_ITEM_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS 
} from "../constants/productsConstants"
import { logout } from './userActions';

// PRODUCT LIST
export const listProduct =(searchWord=" ", pageNumber =" ") => async (dispatch) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST});
        
        const {data} = await axios.get(
            `/products?searchWord=${searchWord}&pageNumber=${pageNumber}`);
        dispatch({type : PRODUCT_LIST_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// SINGLE PRODUCT ITEM
export const singleProduct = (id) => async (dispatch) => {
    try {
        dispatch({type : PRODUCT_ITEM_REQUEST});
        
        const {data} = await axios.get(`/products/${id}`);
        dispatch({type : PRODUCT_ITEM_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: PRODUCT_ITEM_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// CREATE REVIEW
export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({type : PRODUCT_CREATE_REVIEW_REQUEST});
        const {
            userLogin : { userInfo },
        } = getState();

        const config = {
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };
        
        await axios.post(`/products/${productId}/review`,
        review, config);
        dispatch({type : PRODUCT_CREATE_REVIEW_SUCCESS});

    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        if(message === "Not authorized, no token") {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload : message
        });
    };
};