import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService } from '../../../core/services/api/api.service';
import { signinAction } from '../../../core/store/actions/profile.actions';


export const signInEffect = createEffect(
  (actions$ = inject(Actions), apiService = inject(ApiService)) => {
    return actions$.pipe(
      ofType(signinAction),
      exhaustMap((response) => {
          console.log('response', response);
      },
      catchError((error) => {
        console.log('Effect error', error);
      }) )
    )
  },
  {functional : true}
)