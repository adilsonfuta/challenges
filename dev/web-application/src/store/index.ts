import {
  combineReducers, AnyAction, createStore, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducer } from 'react';
import { all, fork } from 'redux-saga/effects';

import { HeroState } from './hero/types';
import { UserState } from './user/types';
import { BattleState } from './battle/types';
import { AlertState } from './_/types';
import { UserReducer } from './user/reducers';
import { HeroesReducer } from './hero/reducers';
import { BattleReducer } from './battle/reducers';
import { AlertReducer } from './_';
import { watchUser } from './user/sagas';
import { watchHero } from './hero/sagas';
import { watchBattle } from './battle/sagas';

export interface ApplicationState {
  alert: AlertState;
  user: UserState;
  heroes: HeroState[];
  battles: BattleState[];
}

function* rootSaga() {
  yield all([
    fork(watchHero),
    fork(watchUser),
    fork(watchBattle),
  ]);
}

const reducers = combineReducers<ApplicationState>({
  alert: AlertReducer,
  user: UserReducer,
  heroes: HeroesReducer,
  battles: BattleReducer,
});

const rootReducer = reducers;

const reducerCreator = ():
Reducer<ApplicationState, AnyAction> => rootReducer;

export { rootSaga, reducerCreator };


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);


export default store;
