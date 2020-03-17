import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  List, ReceiveList, ListError, Battle, ReceiveBattle, BattleError,
} from '../actions';
import * as BattleService from '../../../services/BattleService';
import { AlertState } from '../../_/types';

function* list(action: ReturnType<typeof List>) {
  try {
    const battles = yield BattleService.list();

    yield put(ReceiveList(battles));
  } catch (err) {
    const { data }: { data: AlertState} = err;
    yield put(ListError(data.message, data.error, data.type));
  }
}

function* start(action: ReturnType<typeof Battle>) {
  try {
    const {
      payload: {
        occurrence,
      },
    } = action;

    const battle = yield BattleService.start(occurrence);

    yield put(ReceiveBattle(battle));
  } catch (err) {
    const { data }: { data: AlertState} = err;
    yield put(BattleError(data.message, data.error, data.type));
  }
}

export function* watchBattle() {
  yield all([
    takeEvery(actionTypes.LIST_BATTLE, list),
    takeEvery(actionTypes.BATTLE, start),
  ]);
}
