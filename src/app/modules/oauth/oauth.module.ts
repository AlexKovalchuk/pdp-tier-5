import { NgModule }           from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent }                   from './login/login.component';
import { OauthRoutingModule } from './oauth-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    OauthRoutingModule
  ]
})
export class OauthModule { }
