import { BattleState, Occurrence } from '../types';
import * as actionTypes from './actionTypes';


export const Battle = (occurrence: Occurrence) => ({
  type: actionTypes.BATTLE,
  payload: {
    occurrence,
  },
});

export const ReceiveBattle = (battle: BattleState) => ({
  type: actionTypes.RECEIVE_BATTLE,
  payload: battle,
});

export const BattleError = (message:string, error: boolean, type: 'success' | 'warning' | 'error') => ({
  type: actionTypes.BATTLE_ERROR,
  payload: {
    message,
    error,
    type,
  },
});

export const List = () => ({
  type: actionTypes.LIST_BATTLE,
});

export const ReceiveList = (battles: BattleState[]) => ({
  type: actionTypes.RECEIVE_LIST_BATTLE,
  payload: battles,
});

export const ListError = (message:string, error: boolean, type: 'success' | 'warning' | 'error') => ({
  type: actionTypes.BATTLE_ERROR,
  payload: {
    message,
    error,
    type,
  },
});
