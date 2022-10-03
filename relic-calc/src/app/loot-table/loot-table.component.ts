
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {KeyValue} from '@angular/common';
import { CalculatedRelics, RELIC_LIST } from '../global';

@Component({
  selector: 'app-loot-table',
  templateUrl: './loot-table.component.html',
  styleUrls: ['./loot-table.component.css']
})
export class LootTableComponent implements OnInit {
  @Input() calculated!: CalculatedRelics;
  @Output() calculatedChange = new EventEmitter<CalculatedRelics>();

  partyNames: string[] = [];
  showTable = false;
  RELIC_LIST = RELIC_LIST;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.calculated.length > 0) {
    this.partyNames = new Array(this.calculated.length);
    this.showTable = true;
    }
  }

}
