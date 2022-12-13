import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { environment }  from 'src/environments/environment';
import { GetAuthModel } from '../../models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  constructor(private http: HttpClient) { }


  GetAuthPage(): Observable<GetAuthModel> {
    return this.http.get<GetAuthModel>(environment.baseUrl+'/AuthPage');
  }

  getAccessToken(auth_code:string) {
    return this.http.post(environment.baseUrl+'/getAccessToken',{code:auth_code});
  }

  getUserDetails(): Observable<any> {
    return this.http.get(environment.baseUrl+'/getUserDetails');
  }

  logout() {
    return this.http.get(environment.baseUrl+'/logout');
  }
}
