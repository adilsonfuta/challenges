import { UserState } from '../types';
import * as actionTypes from './actionTypes';

export const Login = (login: string, password: string) => ({
  type: actionTypes.LOGIN,
  payload: {
    login,
    password,
  },
});

export const ReceiveLogin = (user: UserState) => ({
  type: actionTypes.RECEIVE_LOGIN,
  payload: user,
});

export const LoginError = (message:string, error: boolean, type: 'success' | 'warning' | 'error') => ({
  type: actionTypes.LOGIN_ERROR,
  payload: {
    message,
    error,
    type,
  },
});
