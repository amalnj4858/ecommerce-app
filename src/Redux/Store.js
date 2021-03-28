import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './Root-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['cart']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,applyMiddleware(logger));
export const persistor = persistStore(store);

