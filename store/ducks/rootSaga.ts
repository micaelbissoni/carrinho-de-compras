import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from './products/types';
import { CartItemsTypes } from './cartItems/types';
import { load } from './cartItems/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.LOAD_REQUEST, load),
    takeLatest(CartItemsTypes.LOAD_REQUEST, load),
  ]);
}