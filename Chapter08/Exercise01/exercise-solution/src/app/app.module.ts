import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApiHttpInterceptor } from './interceptors/api-http.interceptor';
import { UsersListComponent } from './users-list.component';
import { UsersService } from './users.service';
import { WelcomeMessageComponent } from './welcome-message.component';


@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, WelcomeMessageComponent, UsersListComponent],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
