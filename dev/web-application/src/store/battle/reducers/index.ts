import { BattleState, BattleActionTypes } from '../types';
import { RECEIVE_LIST_BATTLE } from '../actions/actionTypes';

const initialState: BattleState[] = [];

export const BattleReducer = (state = initialState, action: BattleActionTypes): BattleState[] => {
  switch (action.type) {
    case RECEIVE_LIST_BATTLE:
      return action.payload;
    default:
      return state;
  }
};
