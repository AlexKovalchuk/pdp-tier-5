import {profileReducer} from './profile.reducer';
import {counterReducer} from './counter.reducer';
import { ProfileState } from '../../interfaces/profileInterface';

export interface StoreReducer {
  counterReducer: number,
  profileReducer: ProfileState
}

export const storeReducers = {
  counterReducer,
  profileReducer
}