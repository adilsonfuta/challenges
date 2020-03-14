import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  Login, LoginError, ReceiveLogin,
} from '../actions';
import * as Auth from '../../../services/AuthService';
import { ErrorState } from '../../_/types';
import { UserState } from '../types';

function* signIn(action: ReturnType<typeof Login>) {
  try {
    const {
      payload: { login, password },
    } = action;

    const { user, token } = yield Auth.signIn(login, password);
    yield put(ReceiveLogin({ ...user, token }));
  } catch (err) {
    const { data }: { data: ErrorState} = err;
    yield put(LoginError(data.message, data.error));
  }
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.LOGIN, signIn),
  ]);
}
