import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelicSelectComponent } from './relic-select/relic-select.component';
import { PartyConfigComponent } from './party-config/party-config.component';

@NgModule({
  declarations: [
    AppComponent,
    RelicSelectComponent,
    PartyConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
