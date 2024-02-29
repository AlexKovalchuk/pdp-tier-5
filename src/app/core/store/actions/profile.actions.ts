import { createAction, props } from '@ngrx/store';
import { CredentialsToSign, SignInResponse } from '../../interfaces/profileInterface';

export enum ProfileActionTypes {
  SING_IN = '[SignIn Page] Signin',
  SING_IN_START = '[SignIn Page] Signin Start',
  SING_IN_SUCCESS = '[SignIn Page] Signin Success',
  SING_IN_ERROR = '[SignIn Page] Signin Error',
}

export const signinStartAction = createAction(
  ProfileActionTypes.SING_IN_START,
  props<CredentialsToSign>()
);

export const signinSuccessAction = createAction(
  ProfileActionTypes.SING_IN_SUCCESS,
  props<SignInResponse>()
);

// TODO can be removed -> signinAction
export const signinAction = createAction(
  ProfileActionTypes.SING_IN,
  props<CredentialsToSign>()
);