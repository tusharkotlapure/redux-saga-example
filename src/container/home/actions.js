import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const requestProducts = () => ({ type: "FETCH_REQUEST_LISTING", payload: null });
const productListSuccess = (payload) => ({ type: "FETCH_PRODUCT_SUCCESS", payload });
const productListFailure = (payload) => ({ type: "FETCH_PRODUCT_FAILURE", payload });
export const getProductList = () => ({ type: "GET_PRODUCTS" });

function* fetchProducts() {
    try {
        yield put(requestProducts());
        const payload = yield axios.get('https://jsonplaceholder.typicode.com/photos').then(response => response.data.splice(0, 20));
        yield put(productListSuccess(payload));
    } catch (e) {
        yield put(productListFailure(e));
    }
}

export function* watchProductList() {
    yield takeEvery('GET_PRODUCTS', fetchProducts);
}

export const addProductToCart = (payload) => ({ type: "ADD_CART_PRODUCT", payload });
export const removeProductFromCart = (productId, count) => ({ type: "REMOVE_CART_PRODUCT", payload: { productId, count } })
