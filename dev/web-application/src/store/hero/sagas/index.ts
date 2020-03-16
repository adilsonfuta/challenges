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


function* createHero(action: ReturnType<typeof actions.Create>) {
  try {
    const {
      payload,
    } = action;

    const heroe: HeroState = yield Hero.create(payload);
    yield put(actions.ReceiveCreate(heroe));
  } catch (err) {
    const { data }: { data: ErrorState} = err;
    yield put(actions.ListError(data.message, data.error));
  }
}

function* updateHero(action: ReturnType<typeof actions.Update>) {
  try {
    const {
      payload,
    } = action;
    console.log(payload);
    const heroes: HeroState[] = yield Hero.update(payload);
    yield put(actions.ReceiveUpdate(heroes));
  } catch (err) {
    const { data }: { data: ErrorState} = err;
    yield put(actions.ListError(data.message, data.error));
  }
}

function* removeHero(action: ReturnType<typeof actions.Remove>) {
  try {
    const {
      payload: {
        id,
      },
    } = action;

    const heroes: HeroState[] = yield Hero.remove(id);
    yield put(actions.ReceiveRemove(heroes));
  } catch (err) {
    const { data }: { data: ErrorState} = err;
    yield put(actions.ListError(data.message, data.error));
  }
}

export function* watchHero() {
  yield all([
    takeEvery(actionTypes.LIST, listHeroes),
    takeEvery(actionTypes.CREATE, createHero),
    takeEvery(actionTypes.UPDATE, updateHero),
    takeEvery(actionTypes.REMOVE, removeHero),
  ]);
}
