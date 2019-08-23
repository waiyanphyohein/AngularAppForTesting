import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { UploaderComponent } from './uploader/uploader.component';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeroesComponent,
    DownloaderComponent,
    MessagesComponent,
    UploaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      })
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
