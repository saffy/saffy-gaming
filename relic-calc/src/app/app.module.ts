import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { RelicSelectComponent } from './relic-select/relic-select.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { LootTableModule } from './loot-table/loot-table.module';
import { SharedModule } from './shared/shared.module';
import { PartyConfigModule } from './party-config/party-config.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    RelicSelectComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LootTableModule,
    PartyConfigModule,
    MatRippleModule,
    MatBadgeModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatBottomSheetModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
