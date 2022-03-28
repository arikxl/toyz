import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { cartReducer } from './reducers/cartReducers';
import { productItemReducer, productListReducer 
} from './reducers/productReducers';
import { userDetailsReducer, userLoginReducer, 
    userRegisterReducer, userUpdateProfileReducer 
} from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducer';

const reducer = combineReducers({
    cart : cartReducer, 
    userLogin : userLoginReducer, 
    productList : productListReducer,
    productItem : productItemReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userProfileUpdate: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: [];

// LOGIN
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null;

// SHIPPING ADDRESS
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {};

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage
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
