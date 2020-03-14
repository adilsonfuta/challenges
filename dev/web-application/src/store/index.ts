import {
  combineReducers, AnyAction, Store, createStore, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducer } from 'react';
import { all, fork } from 'redux-saga/effects';

import { HeroState } from './hero/types';
import { UserState } from './user/types';
import { ErrorState } from './_/types';
import { UserReducer } from './user/reducers';
import { HeroesReducer } from './hero/reducers';
import { ErrorReducer } from './_';
import { watchUser } from './user/sagas';
import { watchHero } from './hero/sagas';

export interface ApplicationState {
  error: ErrorState;
  user: UserState;
  heroes: HeroState[];
}

function* rootSaga() {
  yield all([
    fork(watchHero),
    fork(watchUser),
  ]);
}

const reducers = combineReducers<ApplicationState>({
  error: ErrorReducer,
  user: UserReducer,
  heroes: HeroesReducer,
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
