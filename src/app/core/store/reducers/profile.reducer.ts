import { Action, createReducer, on } from '@ngrx/store';
import { signinAction, signinSuccessAction } from '../actions/profile.actions';
import { ProfileState } from '../../interfaces/profileInterface'


export const initialProfileState: ProfileState = {
  token: '',
  name: '',
  surName: '',
  age: "",
};

export const profileReducer = createReducer(
  initialProfileState,
  on(signinSuccessAction, (state, action) => {
    return {
      ...state,
      token: action.token
    }
  }),
)
