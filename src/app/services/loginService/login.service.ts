import { Injectable }                 from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn = false;
  public redirectUrl: string | null = null;
  constructor() { }

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(1500),
      tap(() => this.isLoggedIn = true)
    )
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
