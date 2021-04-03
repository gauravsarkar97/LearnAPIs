import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HomepageComponent } from './chat/homepage/homepage.component';
import { PagenotfoundComponent } from './chat/pagenotfound/pagenotfound.component';
import { ReadaboutapiComponent } from './chat/readaboutapi/readaboutapi.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomepageComponent,
    ChatDialogComponent,
    ReadaboutapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
