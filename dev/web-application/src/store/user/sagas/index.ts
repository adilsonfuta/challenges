import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  Login, LoginError, ReceiveLogin,
} from '../actions';
import * as Auth from '../../../services/AuthService';
import { AlertState } from '../../_/types';

function* signIn(action: ReturnType<typeof Login>) {
  try {
    const {
      payload: { login, password },
    } = action;

    const { user, token } = yield Auth.signIn(login, password);

    yield localStorage.setItem('@ZRPHeroes:token', token);

    yield put(ReceiveLogin({ ...user, token }));
  } catch (err) {
    const { data }: { data: AlertState} = err;
    yield put(LoginError(data.message, data.error, data.type));
  }
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.LOGIN, signIn),
  ]);
}
