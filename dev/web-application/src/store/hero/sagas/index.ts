import {
  all, takeEvery,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';
import { HeroState } from '../types';

// function* listHeroes(action: ReturnType<typeof actions.List>) {

// }


export function* watchHero() {
  yield all([
    // takeEvery(actionTypes.LIST, listHeroes),
  ]);
}
