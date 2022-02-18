import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { cartReducer } from './reducers/cartReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productItemReducer, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList : productListReducer,
    productItem : productItemReducer,
    cart : cartReducer, 
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: []

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
