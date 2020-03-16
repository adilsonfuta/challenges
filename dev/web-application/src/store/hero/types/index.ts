import * as actionTypes from '../actions/actionTypes';

export interface HeroState {
  _id?: string;
  name: string;
  class: string;
  lat: number;
  lng: number;
  allocated?: boolean;
}

interface ReceiveListAction {
  type: typeof actionTypes.RECEIVE_LIST;
  payload: HeroState[];
}

interface ListAction {
  type: typeof actionTypes.LIST;
}

export interface ListErrorAction {
  type: typeof actionTypes.LIST_ERROR;
  payload: {
    error: boolean;
    message: string;
    type: 'success' | 'warning' | 'error'
  };
}

interface ReceiveCreateAction {
  type: typeof actionTypes.RECEIVE_CREATE;
  payload: HeroState;
}

interface CreateAction {
  type: typeof actionTypes.CREATE;
  payload: HeroState;
}

export interface CreateErrorAction {
  type: typeof actionTypes.CREATE_ERROR;
  payload: {
    error: boolean;
    message: string;
    type: 'success' | 'warning' | 'error'
  };
}

interface ReceiveUpdateAction {
  type: typeof actionTypes.RECEIVE_UPDATE;
  payload: HeroState[];
}

interface UpdateAction {
  type: typeof actionTypes.UPDATE;
  payload: {
    id: string;
    hero: HeroState;
  };
}

export interface UpdateErrorAction {
  type: typeof actionTypes.UPDATE_ERROR;
  payload: {
    error: boolean;
    message: string;
    type: 'success' | 'warning' | 'error'
  };
}

interface ReceiveRemoveAction {
  type: typeof actionTypes.RECEIVE_REMOVE;
  payload: HeroState[];
}

interface RemoveAction {
  type: typeof actionTypes.REMOVE;
  payload: {
    id: string;
  };
}

export interface RemoveErrorAction {
  type: typeof actionTypes.REMOVE_ERROR;
  payload: {
    error: boolean;
    message: string;
    type: 'success' | 'warning' | 'error'
  };
}


export type HeroActionTypes =
  | ReceiveListAction
  | ListAction
  | ReceiveListAction
  | ListErrorAction
  | ReceiveCreateAction
  | CreateAction
  | ReceiveCreateAction
  | CreateErrorAction
  | ReceiveUpdateAction
  | UpdateAction
  | ReceiveUpdateAction
  | UpdateErrorAction
  | ReceiveRemoveAction
  | RemoveAction
  | ReceiveRemoveAction
  | RemoveErrorAction
