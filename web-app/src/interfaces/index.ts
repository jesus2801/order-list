import { Action } from 'redux';

export interface AppActions extends Action {
  type: string;
  payload: any;
}

export interface UserCtx {
  payload: UserPayload;
}

export interface UserPayload {
  id: string;
  mail: string;
  user: string;
  points: number;
}
