import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule
} from '@angular/common/http';
import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { StoreModule }            from '@ngrx/store';
import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { ChatPageModule }         from './modules/chat/chat-page.module';
import { ChatRoutingModule }      from './modules/chat/chat-routing.module';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { reducers, metaReducers } from './store/mainReducer';
import { OauthModule }            from './modules/oauth/oauth.module';
import { DashboardComponent }     from './modules/oauth/dashboard/dashboard.component';
import { RedirectComponent }      from './components/redirect/redirect.component';
import {
  ErrorHandlingInterceptorService
}                                 from './services/errorHandlingInterceptor/error-handling-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    ChatPageModule,
    ChatRoutingModule,
    OauthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ErrorHandlingInterceptorService,
      multi:true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
