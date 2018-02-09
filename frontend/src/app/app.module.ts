import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';

var routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'user',
  component: UserComponent
}
];

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [WebService, AuthService]
})
export class AppModule { }