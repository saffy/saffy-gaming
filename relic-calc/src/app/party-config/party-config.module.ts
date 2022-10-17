import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PartyConfigComponent, PartyConfigDialog } from './party-config.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [PartyConfigComponent, PartyConfigDialog],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule, 
    DragDropModule
  ],
  exports: [PartyConfigComponent, PartyConfigDialog]
})
export class PartyConfigModule { }
