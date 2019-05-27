import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ChatComponent } from './workspace/chat/chat.component';
import { DetailsComponent } from './workspace/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkspaceComponent,
    ChatComponent,
    DetailsComponent
  ],
  entryComponents: [
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
