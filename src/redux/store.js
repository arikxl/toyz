import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { cartReducer } from './reducers/cartReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productItemReducer, productListReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
    productList : productListReducer,
    productItem : productItemReducer,
    cart : cartReducer, 
    userLogin : userLoginReducer, 
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: [];

// LOGIN
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null;

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
    },  
    userLogin : {
        userInfo: userInfoFromLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
