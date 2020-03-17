import { Moment } from 'moment';
import {
  BATTLE, RECEIVE_BATTLE, BATTLE_ERROR, LIST_BATTLE, RECEIVE_LIST_BATTLE, LIST_BATTLE_ERROR,
} from '../actions/actionTypes';
import { HeroState } from '../../hero/types';

export interface Occurrence {
  _id?: string;
  name: string;
  level: string;
  lat: number;
  lng: number;
}


export interface BattleState {
  _id?: string;
  occurrence: Occurrence;
  hero: HeroState;
  createdAt: Moment
}

interface ReceiveBattleAction {
  type: typeof RECEIVE_BATTLE;
  payload: BattleState;
}

interface BattleAction {
  type: typeof BATTLE;
  payload: {
    occurrence: Occurrence
  };
}

export interface BattleErrorAction {
  type: typeof BATTLE_ERROR;
  payload: {
    message: string,
    error: boolean,
    type: 'success' | 'warning' | 'error'
  };
}


interface ReceiveListAction {
  type: typeof RECEIVE_LIST_BATTLE;
  payload: BattleState[];
}

interface ListAction {
  type: typeof LIST_BATTLE;
}

export interface ListErrorAction {
  type: typeof LIST_BATTLE_ERROR;
  payload: {
    message: string,
    error: boolean,
    type: 'success' | 'warning' | 'error'
  };
}


export type BattleActionTypes =
  | BattleAction
  | ReceiveBattleAction
  | BattleErrorAction
  | ListAction
  | ReceiveListAction
  | ListErrorAction
