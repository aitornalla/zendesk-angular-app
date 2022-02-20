import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ZafClientService } from './services/zafclient/zafclient.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ZafClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
