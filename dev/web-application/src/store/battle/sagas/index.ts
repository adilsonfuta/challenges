import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  List, ReceiveList, ListError,
} from '../actions';
import * as Battle from '../../../services/BattleService';
import { AlertState } from '../../_/types';

function* list(action: ReturnType<typeof List>) {
  try {
    const battles = yield Battle.list();

    yield put(ReceiveList(battles));
  } catch (err) {
    const { data }: { data: AlertState} = err;
    yield put(ListError(data.message, data.error, data.type));
  }
}

export function* watchBattle() {
  yield all([
    takeEvery(actionTypes.LIST_BATTLE, list),
  ]);
}
