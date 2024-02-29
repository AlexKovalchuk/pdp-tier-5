import { Injectable } from '@angular/core';
import { exhaustMap, map, pipe } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService } from '../../../core/services/api/api.service';
import { signinAction, signinStartAction, signinSuccessAction } from '../../../core/store/actions/profile.actions';
import { CredentialsToSign, SignInResponse } from '../../interfaces/profileInterface';

@Injectable()
export class ApiEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ){}
  
  signIn$ = createEffect(() => {
    console.log('signEffect start');
    
    return this.actions$.pipe(
      ofType(signinStartAction),
      exhaustMap((credentials: CredentialsToSign) => {
        console.log('exhaustMap', credentials);
        
        return this.apiService.signInNew(credentials).pipe(
          map((responseSignInData: SignInResponse) => {
            console.log('data after SignIn request response pipe in effect:', responseSignInData);
            this.apiService.setSession(responseSignInData); // TODO can send less data to this function
            return signinSuccessAction(responseSignInData);
          })
        )
      })
    )
  })

}
