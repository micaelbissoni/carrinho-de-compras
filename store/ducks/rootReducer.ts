import products from './products';
import cartItems from './cartItems';
import { combineReducers } from 'redux';

export default combineReducers({
    products,
    cartItems,
})