import { HeroState, HeroActionTypes } from '../types';
import {
  RECEIVE_LIST, RECEIVE_CREATE, RECEIVE_REMOVE, RECEIVE_UPDATE,
} from '../actions/actionTypes';

const initialState: HeroState[] = [];

export const HeroesReducer = (state = initialState, action: HeroActionTypes): Array<HeroState> => {
  switch (action.type) {
    case RECEIVE_LIST:
      return action.payload;
    case RECEIVE_CREATE:
      return [
        ...state,
        action.payload];
    case RECEIVE_UPDATE:
      return action.payload;
    case RECEIVE_REMOVE:
      return action.payload;
    default:
      return state;
  }
};
