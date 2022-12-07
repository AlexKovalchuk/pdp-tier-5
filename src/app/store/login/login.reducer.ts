import {
  Action, createFeature,
  createReducer, on
}                from '@ngrx/store';
import { login } from './login.actions';


export interface LoginState {
  name: string;
  password: string;
  id: number;
  isLogin: boolean;
}

export const initialState: LoginState = {
  name: '',
  password: '',
  id: 0,
  isLogin: false
}

export const loginReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return { ...action };
  })
)

