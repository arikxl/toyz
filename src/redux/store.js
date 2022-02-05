import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { productItemReducer, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList : productListReducer,
    productItem : productItemReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
