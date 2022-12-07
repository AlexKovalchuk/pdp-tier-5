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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ChatPageModule,
    ChatRoutingModule,
    OauthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
