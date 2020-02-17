import { action } from 'typesafe-actions';
import { UsersTypes, User } from './types';

export const loginRequest = () => action(UsersTypes.LOGIN_REQUEST);
export const loginSuccess = (data: User[]) => action(UsersTypes.LOGIN_SUCCESS, { data });
export const loginFailure = () => action(UsersTypes.LOGIN_FAILURE);