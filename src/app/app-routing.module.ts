import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HomepageComponent } from './chat/homepage/homepage.component';
import { PagenotfoundComponent } from './chat/pagenotfound/pagenotfound.component';
import { ReadaboutapiComponent } from './chat/readaboutapi/readaboutapi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'read', component: ReadaboutapiComponent},
    { path: 'chatbot', component: ChatDialogComponent },
    { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
