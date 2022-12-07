import { Component }  from '@angular/core';
import { Store }      from '@ngrx/store';
import {
  FormControl,
  Validators
}                     from '@angular/forms';
import { Observable } from 'rxjs';
import { login }      from '../../../store/login/login.actions';
import { LoginState } from '../../../store/login/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  public login$: Observable<LoginState>
  public message: string = 'Hello this is login page.'
  public name: FormControl = new FormControl('Elrander',
    [ Validators.required, Validators.minLength(4) ]);

  public password: FormControl = new FormControl('1235',
    [ Validators.required, Validators.minLength(4) ]);
  constructor(private store: Store<{ login: LoginState }>) {
    this.login$ = store.select('login');
    this.login$.subscribe(login => {
      console.log('login store:', login);
    })
  }

  submit() {
    console.log(`trying to login: ${ this.name } ${ this.password }`);
    const loginData: LoginState = {
      name: this.name.value,
      password: this.password.value,
      id: 1,
      isLogin: true
    }
    this.store.dispatch(login(loginData))
  }
}
