import { applyMiddleware, createStore } from 'redux';
import { reducer } from '../product-reducer/reducer';
import thunk from 'redux-thunk'
export const store = createStore(reducer,applyMiddleware(thunk))