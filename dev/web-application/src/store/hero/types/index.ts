import * as actionTypes from '../actions/actionTypes';

export interface HeroState {
  name: string;
  class: string;
  lat: number;
  lng: number;
  allocated: boolean;
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
    message: string;
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
    message: string;
  };
}

interface ReceiveUpdateAction {
  type: typeof actionTypes.RECEIVE_UPDATE;
  payload: HeroState;
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
    message: string;
  };
}

interface ReceiveRemoveAction {
  type: typeof actionTypes.RECEIVE_REMOVE;
  message: string;
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
    message: string;
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
