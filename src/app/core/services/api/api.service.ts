import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from "moment";
import {tap} from 'rxjs';
import { apiLocalDevelopUrl } from './../../constants/environment-constants';
import { CredentialsToSign, SignInResponse } from '../../interfaces/profileInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signIn(credentials: CredentialsToSign): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${apiLocalDevelopUrl}/signin`, credentials).pipe(tap(res => this.setSession(res)));
  }

  signInNew(credentials: CredentialsToSign): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(
      `${apiLocalDevelopUrl}/signin`, credentials
    );
  }

  formatUser(data: CredentialsToSign) {
    // const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
    // const user = new User(data.email, data.idToken, data.localId, expirationDate);
    // return user;
  }


  public setSession(authResult: SignInResponse) {
    const expiresAt = moment().add(authResult.expiresIn,'minute');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }  

  signOut() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  public getExpiration() {
    const expiration = localStorage.getItem("expires_at") || '';
    console.log('expiration', expiration);
    if(!!expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return null;
  }   

  signUp(credentials: CredentialsToSign): Observable<any> {
    return this.http.post<any>(`${apiLocalDevelopUrl}/signup`, credentials);
  }

}
