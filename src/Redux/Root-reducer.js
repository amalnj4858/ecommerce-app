import {combineReducers} from 'redux';
import cartReducer from './Cart/Cart-reducer';
import userReducer from './User/User-reducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
});

export default rootReducer;