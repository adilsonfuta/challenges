import { UserState, UserActionTypes } from '../types';
import { RECEIVE_LOGIN } from '../actions/actionTypes';

const initialState: UserState = {
  login: '',
  name: '',
};

export const UserReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
