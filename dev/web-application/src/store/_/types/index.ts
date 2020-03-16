import {
  ListErrorAction, RemoveErrorAction, CreateErrorAction, UpdateErrorAction,
} from '../../hero/types';
import { LoginErrorAction } from '../../user/types';

export interface AlertState {
    error: boolean;
    message: string;
    type: 'success' | 'warning' | 'error'
}


export type AlertActionTypes =
  | LoginErrorAction
  | ListErrorAction
  | CreateErrorAction
  | UpdateErrorAction
  | RemoveErrorAction
