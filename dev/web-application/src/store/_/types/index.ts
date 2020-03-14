import {
  ListErrorAction, RemoveErrorAction, CreateErrorAction, UpdateErrorAction,
} from '../../hero/types';
import { LoginErrorAction } from '../../user/types';

export interface ErrorState {
    error: boolean;
    message: string;
}


export type ErrorActionTypes =
  | LoginErrorAction
  | ListErrorAction
  | CreateErrorAction
  | UpdateErrorAction
  | RemoveErrorAction
