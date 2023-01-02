import { createStore } from 'redux';
import { reducer } from '../product-reducer/reducer';

export const store = createStore(reducer,{})