import { Injectable, NgZone } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import {
  ErrorNotificationService
} from '../errorNotification/error-notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService {

  constructor(
    private serv: ErrorNotificationService,
    private router:Router
  ) { }

  intercept(req:HttpRequest<any>,next:HttpHandler)
  {

    return next.handle(req).pipe(
      retry(1),
      catchError(err => this.handleError(err)),
      tap({
        next: event => {
              console.log('intercept event:', event);
            },
        error: error => {
              console.log('intercept error:', error);
            }
      })
    )
  }

  handleError(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      this.serv.notify(error.error.message);
    }
    else
    {
      if(error.status==401){this.router.navigate(['/login']); }
      else
      {
        this.serv.notify(error.error);
      }
    }

    return throwError(error);

  }
}
