
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {KeyValue} from '@angular/common';
import { CalculatedRelics, RELIC_LIST } from '../global';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-loot-table',
  templateUrl: './loot-table.component.html',
  styleUrls: ['./loot-table.component.css']
})
export class LootTableComponent implements OnInit {
  @Input() calculated!: CalculatedRelics;
  @Output() calculatedChange = new EventEmitter<CalculatedRelics>();
  @Output() partyNamesChange = new EventEmitter<string[]>();

  showTable = false;
  RELIC_LIST = RELIC_LIST;
  chatText: string = "";
  AION_SYMBOLS = ['','','','','',''];
  webNavigator: any= null;
  partyNames: string[] = [];

  constructor(private clipboard: Clipboard) { 
    this.webNavigator = window.navigator;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.calculated.length > 0) {
      this.partyNames = new Array(this.calculated.length).fill("").map((_unused:string, i: number) => `Player ${i+1}`);
      this.showTable = true;
    }
  }

  generateShortText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated.length; i++) {
      textBuilder = textBuilder + this.generateShortTextFor(i);
  }
    this.chatText = textBuilder;
  }

  generateShortTextFor(i: number):string{
    let textBuilder: string = ""

    let relics = Object.keys(this.calculated[i].relics);
      if(relics.length > 0) {
        textBuilder = textBuilder + `[${this.getShortName(i)}|${this.calculated[i].points}]: `
        let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].shortName} x ${this.calculated[i].relics[relic]}`});

        textBuilder = textBuilder + mappedRelics.join(', ');
        textBuilder = textBuilder + "  ";
    }
    return textBuilder;
  }

  generateLongText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated.length; i++) {
      let relics = Object.keys(this.calculated[i].relics);
      if(relics.length > 0) {
        textBuilder = textBuilder + `[${this.partyNames[i]}]: `;
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

  nameUpdated(event: EventEmitter<string>) {
    console.log("names updated, emitting");
    this.partyNamesChange.emit(this.partyNames);
  }

  getShortName(i: number): string {
    if(this.partyNames[i].includes("Player")){
      return this.AION_SYMBOLS[i];
    } else {
    return `${this.AION_SYMBOLS[i]}|${this.partyNames[i]}`;
    }
  }

  copyText(i: number) {
    let text: string = this.generateShortTextFor(i);
    this.clipboard.copy(text);
  }
}
