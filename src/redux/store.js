import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { cartReducer } from './reducers/cartReducers';
import { productItemReducer, productListReducer 
} from './reducers/productReducers';
import { userDetailsReducer, userLoginReducer, 
    userRegisterReducer, userUpdateProfileReducer 
} from './reducers/userReducers';

const reducer = combineReducers({
    cart : cartReducer, 
    userLogin : userLoginReducer, 
    productList : productListReducer,
    productItem : productItemReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userProfileUpdate: userUpdateProfileReducer,
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
