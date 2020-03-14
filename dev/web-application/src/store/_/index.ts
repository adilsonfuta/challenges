import { ErrorState, ErrorActionTypes } from './types';
import { LOGIN_ERROR } from '../user/actions/actionTypes';
import { LIST_ERROR } from '../hero/actions/actionTypes';

const initialState:ErrorState = {
  error: false,
  message: '',
};

export const ErrorReducer = (state = initialState, action:
    ErrorActionTypes): ErrorState => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case LIST_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        error: false,
        message: '',
      };
  }
};
