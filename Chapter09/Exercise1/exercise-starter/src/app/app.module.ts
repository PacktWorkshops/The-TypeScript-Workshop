import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list.component';
import { UsersService } from './users.service';
import { WelcomeMessageComponent } from './welcome-message.component';


@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, WelcomeMessageComponent, UsersListComponent],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
