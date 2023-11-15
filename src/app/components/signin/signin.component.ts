import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from './../../core/services/api/api.service';
import { CredentialsToSign } from '../../core/interfaces/profileInterface';
import { signinAction } from '../../core/store/actions/profile.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signin$: Observable<any>; // TODO create interface for the 
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ signin: any }>
  ) { 
    this.signin$ = store.select('signin');
  }


  ngOnInit(): void {
  }

  signInUser() {
    const realCredentials = null;
    const credentials: CredentialsToSign = { email: "oleksandr@gmail.com", password: "MyPassw0rd!" };
    this.store.dispatch(signinAction(credentials));
    
    this.apiService.signIn(credentials).subscribe(
      response => {
        // Handle successful sign-in
        this.router.navigate(['']);
      },
      error => {
        // Handle sign-in error
        console.error(error);
      }
    );
  }

}
