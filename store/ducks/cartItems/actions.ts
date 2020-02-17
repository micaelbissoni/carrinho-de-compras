import { action } from 'typesafe-actions';
import { CartItemsTypes, CartItem } from './types';

export const loadRequest = () => action(CartItemsTypes.LOAD_REQUEST);
export const loadSuccess = (data: CartItem[]) => action(CartItemsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CartItemsTypes.LOAD_FAILURE);