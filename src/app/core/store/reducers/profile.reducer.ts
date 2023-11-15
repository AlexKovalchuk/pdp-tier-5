import { Action, createReducer, on } from '@ngrx/store';
import { signinAction } from '../actions/profile.actions';
import { ProfileState } from '../../interfaces/profileInterface'


export const initialProfileState: ProfileState = {};
export const profileReducer = createReducer(
  initialProfileState,
  on(signinAction, state => ({...state})),
)
