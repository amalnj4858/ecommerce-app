import {combineReducers} from 'redux';

import userReducer from './User/User-reducer.js';

const rootReducer = combineReducers({
    user:userReducer
});

export default rootReducer;