import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent }                   from './login/login.component';
import { OauthRoutingModule }               from './oauth-routing.module';
import { GitAuthComponent }                 from './git-auth/git-auth.component';
import { OAuthService }                     from '../../services/oAuthService/oauth.service';



@NgModule({
  declarations: [
    LoginComponent,
    GitAuthComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    OauthRoutingModule
  ],
  providers:[OAuthService]
})
export class OauthModule { }
