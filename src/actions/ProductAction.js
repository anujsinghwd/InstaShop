import axios from 'axios';
import { GET_PRODUCTS, LOADING, GET_ERRORS } from './types';

// GET Products List
export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.post('http://51.15.196.66:5000/api/posts', {})
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}

// Products Loading
export const setProductsLoading = () => {
    return {
        type: LOADING
    }
}