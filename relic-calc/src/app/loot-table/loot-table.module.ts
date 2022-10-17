import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LootTableComponent } from './loot-table.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [LootTableComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    ClipboardModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    MatTableModule,
    FormsModule
  ],
  exports: [LootTableComponent]
})
export class LootTableModule { }
