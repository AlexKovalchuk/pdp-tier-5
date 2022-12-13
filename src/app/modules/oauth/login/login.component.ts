import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import {
  FormControl,
  Validators
}                            from '@angular/forms';
import { Observable }        from 'rxjs';
import { login }             from '../../../store/login/login.actions';
import { LoginState }        from '../../../store/login/login.reducer';
import { Router }            from '@angular/router';
import { OAuthService }      from '../../../services/oAuthService/oauth.service';
import { GetAuthModel }      from '../../../models/auth-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  public login$: Observable<LoginState>
  public message: string = 'Hello this is login page.'
  public name: FormControl = new FormControl('Elrander',
    [ Validators.required, Validators.minLength(4) ]);
  public password: FormControl = new FormControl('1235',
    [ Validators.required, Validators.minLength(4) ]);
  public AuthUrl:string = '';

  constructor(
    private store: Store<{ login: LoginState }>,
    private serv: OAuthService,
    private router: Router
  ) {
    this.login$ = store.select('login');
    this.login$.subscribe(loginData => {});
  }

  public ngOnInit() {
    this.serv.GetAuthPage().subscribe({
      next: (data: GetAuthModel) => {
        console.log('GetAuthPage data', data);
        this.AuthUrl = data['authUrl']
      },
      error: err => {
        console.log('GetAuthPage Error:', err)
      }
    })
  }

  public submit() {
    console.log(`trying to login: ${ this.name } ${ this.password }`);
    const loginData: LoginState = {
      name: this.name.value,
      password: this.password.value,
      id: 1,
      isLogin: true
    }
    this.store.dispatch(login(loginData))
  }

  public loginGithub() {
    this.router.navigate(['/test'],{queryParams:{url:this.AuthUrl}});
  }
}
