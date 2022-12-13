import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtUrlResolverService {
  resolve(
    route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<any> {
    window.location.href = route.queryParamMap.get('url') as string;
    return of(null);
  }
}
