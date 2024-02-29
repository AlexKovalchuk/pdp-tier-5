import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { ChatPageModule }        from './modules/chat/chat-page.module';
import { ChatRoutingModule } from './modules/chat/chat-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Store
import {storeReducers} from './core/store/reducers/store.reducers';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SigninComponent } from './components/auth/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ApiEffect } from './core/store/effects/profile.effects';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SigninComponent,
    MainComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    ChatPageModule,
    ChatRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot([ApiEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
