import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { ChatComponent }     from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent }     from './user/user.component';
import { DirectConversationComponent } from './direct-conversation/direct-conversation.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';


@NgModule({
  declarations: [
    ChatComponent,
    UserListComponent,
    UserComponent,
    DirectConversationComponent,
    ChatAreaComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatPageModule {

}
