import {
  LOGIN, RECEIVE_LOGIN, LOGIN_ERROR,
} from '../actions/actionTypes';

export interface UserState {
  id?: string,
  token?: string,
  name: string;
  login: string;
}

interface ReceiveLoginAction {
  type: typeof RECEIVE_LOGIN;
  payload: UserState;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    name: string;
    password: string;
  };
}

export interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  payload: {
    message: string,
    error: boolean,
    type: 'success' | 'warning' | 'error'
  };
}


export type UserActionTypes =
  | ReceiveLoginAction
  | LoginAction
  | ReceiveLoginAction
  | LoginErrorAction
