import { PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_RESET, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_ITEM_FAIL, PRODUCT_ITEM_REQUEST, PRODUCT_ITEM_SUCCESS,
    PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS }
from "../constants/productsConstants";

// PRODUCT LIST
export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products : []};    
        case PRODUCT_LIST_SUCCESS:
            return { loading: false,
                pages: action.payload.pages,
                page: action.payload.page,
                products : action.payload.products};    
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

// CREATE REVIEW
export const productCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return {loading: true};    
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true};    
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error : action.payload};    
        case PRODUCT_CREATE_REVIEW_RESET:
            return {};    
        default:
            return state;
    }
};