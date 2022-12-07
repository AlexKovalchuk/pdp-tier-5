import { isDevMode }      from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
}                         from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { loginReducer }   from './login/login.reducer';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    return reducer(state, action);
  };
}

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
  login: loginReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [ debug ] : [];
