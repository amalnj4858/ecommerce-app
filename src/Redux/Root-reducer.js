import {combineReducers} from 'redux';
import cartReducer from './Cart/Cart-reducer';
import userReducer from './User/User-reducer.js';
import {sectionsReducer} from './Sections/Sections-reducer.js';
import shopReducer from './Shop/Shop-reducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    sections:sectionsReducer,
    shop:shopReducer
});

export default rootReducer;