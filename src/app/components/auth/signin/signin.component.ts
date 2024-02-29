import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api/api.service';
import { CredentialsToSign } from '../../../core/interfaces/profileInterface';
import { signinAction, signinStartAction } from '../../../core/store/actions/profile.actions';
import { StoreReducer } from 'src/app/core/store/reducers/store.reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('oleksandr@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('MyPassw0rd!', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<StoreReducer>
  ) { 
    
  }


  ngOnInit(): void {
  }

  signInUser() {
    const realCredentials = null;
    const credentials: CredentialsToSign = { email: "oleksandr@gmail.com", password: "MyPassw0rd!" };
    console.log('signInUser', credentials);
    
    this.store.dispatch(signinStartAction(credentials));

    // this.store.dispatch(signinAction(credentials));
    // this.apiService.signIn(credentials).subscribe(
    //   response => {
    //     // Handle successful sign-in
    //     this.router.navigate(['']);
    //   },
    //   error => {
    //     // Handle sign-in error
    //     console.error(error);
    //   }
    // );
  }

}
