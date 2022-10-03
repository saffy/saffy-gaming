
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {KeyValue} from '@angular/common';
import { CalculatedRelics, RELIC_LIST } from '../global';
import { share } from 'rxjs';

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
  chatText: string = "";
  aionSymbols = ['','','','','','']
  webNavigator: any= null;

  constructor() { 
    this.webNavigator = window.navigator;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.calculated.length > 0) {
    this.partyNames = new Array(this.calculated.length);
    this.showTable = true;
    }
  }

  generateShortText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated.length; i++) {
      let relics = Object.keys(this.calculated[i].relics);
      if(relics.length > 0) {
      textBuilder = textBuilder + `${this.aionSymbols[i]}: `
      let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].shortName} x ${this.calculated[i].relics[relic]}`});

      textBuilder = textBuilder + mappedRelics.join(', ');
      textBuilder = textBuilder + "  ";
    }
  }
    this.chatText = textBuilder;
  }

  generateLongText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated.length; i++) {
      let relics = Object.keys(this.calculated[i].relics);
      if(relics.length > 0) {
        textBuilder = textBuilder + `Player ${i+1}`;
      let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].name} x ${this.calculated[i].relics[relic]}`});

      textBuilder = textBuilder + mappedRelics.join('\r\n');
    }
  }
  this.chatText = textBuilder;
  }

  async triggerShare() {
    const shareData = {
      title: 'AP split',
      text: 'Testing 123',
    }
    try {
      await navigator.share(shareData);
    } catch(err) {
      console.log("Can't share:" + err);
    }


  }
  async triggerDc() {
    let url = encodeURI("discord://");
    window.open(url);


  }

}
