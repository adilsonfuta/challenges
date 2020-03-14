import { HeroState, HeroActionTypes } from '../types';
import { RECEIVE_LIST } from '../actions/actionTypes';

const initialState: HeroState[] = [];

export const HeroesReducer = (state = initialState, action: HeroActionTypes): Array<HeroState> => {
  switch (action.type) {
    case RECEIVE_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
