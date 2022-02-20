import axios from 'axios';

import { USER_LOGIN_FAIL,
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
} from "../constants/userConstants";


// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type : USER_LOGIN_REQUEST});
        
        const {data} = await axios.get(`/products/${id}`);
        dispatch({type : USER_LOGIN_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};