import { createStore, Store, applyMiddleware } from 'redux';
import rootReducers from './ducks/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';
import { CartState } from './ducks/cartItems/types';
import { ProductState } from './ducks/products/types';

export interface ApplicationState {
    cartItems:  CartState,
    products: ProductState
}

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;