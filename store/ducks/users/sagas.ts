import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login(action) {
    try {
        const response = yield call(api.post, '/produtos', {
            data: action.payload
        });
        yield put(loginSuccess(response.data));
    } catch (err) {
        yield put(loginFailure());
    }
}