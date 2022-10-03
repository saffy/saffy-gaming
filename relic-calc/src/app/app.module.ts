import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { RelicSelectComponent } from './relic-select/relic-select.component';
import { PartyConfigComponent } from './party-config/party-config.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    RelicSelectComponent,
    PartyConfigComponent,
    LootTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
