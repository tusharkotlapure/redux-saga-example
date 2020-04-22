import { combineReducers } from "redux";
import {listingStore, shoppingCartStore } from './container/home/reducer';
import dashboardReducer from './container/dashboard/reducer';

export default combineReducers({
    homeReducer: listingStore,
    shoppingCart: shoppingCartStore,
    dashboardReducer,
});
