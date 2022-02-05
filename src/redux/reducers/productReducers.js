import { PRODUCT_ITEM_FAIL,
    PRODUCT_ITEM_REQUEST,
    PRODUCT_ITEM_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS }
from "../constants/productsConstants";

// PRODUCT LIST
export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products : []};    
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products : action.payload};    
        case PRODUCT_LIST_FAIL:
            return { loading: false, error : action.payload};    
        default:
            return state;
    }
};

// SINGLE PRODUCT ITEM
export const productItemReducer = (state = {product: {reviews: []}}, action) => {
    switch (action.type) {
        case PRODUCT_ITEM_REQUEST:
            return {...state, loading: true};    
        case PRODUCT_ITEM_SUCCESS:
            return { loading: false, product : action.payload};    
        case PRODUCT_ITEM_FAIL:
            return { loading: false, error : action.payload};    
        default:
            return state;
    }
};