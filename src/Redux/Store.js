import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './Root-reducer';

export const store = createStore(rootReducer,applyMiddleware(logger));