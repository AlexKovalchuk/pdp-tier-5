import { createAction, props } from '@ngrx/store';
import { CredentialsToSign } from '../../interfaces/profileInterface';

export enum ProfileActionTypes {
  SING_IN = '[SignIn Page] Signin',
  SING_IN_COMPLETE = '[SignIn Page] Signin Complete',
  SING_IN_ERROR = '[SignIn Page] Signin Error',
}

export const signinAction = createAction(
  '[SignIn Page] Signin',
  props<CredentialsToSign>()
);