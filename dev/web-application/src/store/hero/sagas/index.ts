import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as Hero from '../../../services/HeroService';
import * as actions from '../actions';
import { ErrorState } from '../../_/types';
import { HeroState } from '../types';

function* listHeroes(action: ReturnType<typeof actions.List>) {
  try {
    const heroes: HeroState[] = yield Hero.list();
    yield put(actions.ReceiveList(heroes));
  } catch (err) {
    const { data }: { data: ErrorState} = err;
    yield put(actions.ListError(data.message, data.error));
  }
}


export function* watchHero() {
  yield all([
    takeEvery(actionTypes.LIST, listHeroes),
  ]);
}
