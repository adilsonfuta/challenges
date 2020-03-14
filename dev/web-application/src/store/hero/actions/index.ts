import { HeroState } from '../types';
import * as actionTypes from './actionTypes';

export const List = () => ({
  type: actionTypes.LIST,
});

export const ReceiveList = (heroes: HeroState[]) => ({
  type: actionTypes.RECEIVE_LIST,
  payload: heroes,
});

export const ListError = (message: string, error: boolean) => ({
  type: actionTypes.LIST_ERROR,
  payload: {
    message,
    error,
  },
});

export const Create = (hero: HeroState) => ({
  type: actionTypes.CREATE,
});

export const ReceiveCreate = (hero: HeroState) => ({
  type: actionTypes.CREATE,
  payload: hero,
});

export const CreateError = (message: string) => ({
  type: actionTypes.CREATE_ERROR,
  payload: {
    message,
  },
});

export const Update = (id: string) => ({
  type: actionTypes.UPDATE,
});

export const ReceiveUpdate = (hero: HeroState) => ({
  type: actionTypes.RECEIVE_UPDATE,
  payload: hero,
});

export const UpdateError = (message: string) => ({
  type: actionTypes.UPDATE_ERROR,
  payload: {
    message,
  },
});

export const Remove = (id: string) => ({
  type: actionTypes.REMOVE,
  payload: {
    id,
  },
});

export const ReceiveRemove = (message: string) => ({
  type: actionTypes.RECEIVE_REMOVE,
  payload: {
    message,
  },
});

export const RemoveError = (message: string) => ({
  type: actionTypes.REMOVE_ERROR,
  payload: {
    message,
  },
});
