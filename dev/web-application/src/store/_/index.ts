import { AlertState, AlertActionTypes } from './types';
import { LOGIN_ERROR } from '../user/actions/actionTypes';
import {
  LIST_ERROR, CREATE_ERROR, UPDATE_ERROR, REMOVE_ERROR,
} from '../hero/actions/actionTypes';

const initialState:AlertState = {
  error: false,
  message: '',
  type: 'success',
};

export const AlertReducer = (state = initialState, action:
    AlertActionTypes): AlertState => {
  switch (action.type) {
    case LOGIN_ERROR:
      return action.payload;
    case LIST_ERROR:
      return action.payload;
    case CREATE_ERROR:
      return action.payload;
    case UPDATE_ERROR:
      return action.payload;
    case REMOVE_ERROR:
      return action.payload;
    default:
      return {
        error: false,
        message: '',
        type: 'success',
      };
  }
};
