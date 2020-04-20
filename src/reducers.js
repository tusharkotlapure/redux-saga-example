import { combineReducers } from "redux";
import homeReducer from './container/home/reducer';
import dashboardReducer from './container/dashboard/reducer';

export default combineReducers({
    homeReducer,
    dashboardReducer,
});
