import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ name: string; password: string, id: number, isLogin: boolean }>()
);
