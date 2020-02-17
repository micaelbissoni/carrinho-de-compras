import { action } from 'typesafe-actions';
import { ProductsTypes, Product } from './types';

export const loadRequest = () => action(ProductsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Product[]) => action(ProductsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);