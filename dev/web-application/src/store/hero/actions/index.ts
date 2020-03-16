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
  payload: hero,
});

export const ReceiveCreate = (hero: HeroState) => ({
  type: actionTypes.RECEIVE_CREATE,
  payload: hero,
});

export const CreateError = (message: string) => ({
  type: actionTypes.CREATE_ERROR,
  payload: {
    message,
  },
});

export const Update = (hero: HeroState) => ({
  type: actionTypes.UPDATE,
  payload: hero,
});

export const ReceiveUpdate = (heroes: HeroState[]) => ({
  type: actionTypes.RECEIVE_UPDATE,
  payload: heroes,
});

export const UpdateError = (message: string) => ({
  type: actionTypes.UPDATE_ERROR,
  payload: {
    message,
  },
});

export const Remove = (id?: string) => ({
  type: actionTypes.REMOVE,
  payload: {
    id,
  },
});

export const ReceiveRemove = (heroes: HeroState[]) => ({
  type: actionTypes.RECEIVE_REMOVE,
  payload: heroes,
});

export const RemoveError = (message: string) => ({
  type: actionTypes.REMOVE_ERROR,
  payload: {
    message,
  },
});
