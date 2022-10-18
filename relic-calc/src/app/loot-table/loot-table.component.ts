
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Injectable, Inject} from '@angular/core';
import { CalculatedRelics, RELIC_LIST, UserRelics } from '../global';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { Firestore, collection, collectionData,doc,addDoc,serverTimestamp, updateDoc} from '@angular/fire/firestore';

interface LootTableData {
  calculatedRelics: CalculatedRelics;
  partySize: number;
  partyNames: string[];
}

@Component({
  selector: 'app-loot-table',
  templateUrl: './loot-table.component.html',
  styleUrls: ['./loot-table.component.css']
})
export class LootTableComponent implements OnInit {
  @Input() calculated: CalculatedRelics = new Array<UserRelics>();
  @Output() calculatedChange = new EventEmitter<CalculatedRelics>();
  @Output() partyNamesChange = new EventEmitter<string[]>();

  showTable = false;
  RELIC_LIST = RELIC_LIST;
  chatText: string = "";
  AION_SYMBOLS = ['','','','','',''];
  webNavigator: any= null;
  partyNames: string[] = [];
  showMobile = false;

  splitConverter = {toFirestore: (calculated: CalculatedRelics) => {
    let split = [];
    for (let i = 0; i < this.calculated!.length; i++) {
      let relics: Array<{name: string, value: number}> = [];
      Object.entries(this.calculated[i].relics).forEach(([key,number]) => {
        let nRelics = new Array(number).fill({name: RELIC_LIST[key].name, value: RELIC_LIST[key].points});
        relics.push(...nRelics);
      })
      
      let playerObj = 
        {player: `Player ${i+1}`,
        relics: relics, 
        total: this.calculated![i].points
      };
    split.push(playerObj);
    
  }
    return {split: split};
}}

  
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: LootTableData, 
    private clipboard: Clipboard, 
    private _bottomSheetRef: MatBottomSheetRef<LootTableComponent>,
    private firestore: Firestore
    ) { 
    this.webNavigator = window.navigator;
  }

  ngOnInit(): void {
    this.showMobile = window.innerWidth <= 700;
    window.onresize = () => this.showMobile = window.innerWidth <= 700;
    this.calculated = this.data.calculatedRelics;
    this.partyNames = new Array(this.data.partySize).fill("").map((_unused:string, i: number) => {
      return this.data.partyNames[i] || `Player ${i+1}`
    });
    this.showTable = this.calculated && this.calculated[0].points > 0;
  }

  ngOnChanges(): void {
    if(this.calculated && this.calculated[0].points > 0) {
      this.showTable = true;
    }
  }

  generateShortText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated!.length; i++) {
      textBuilder = textBuilder + this.generateShortTextFor(i);
  }
    this.chatText = textBuilder;
  }

  generateShortTextFor(i: number):string{
    let textBuilder: string = ""

    let relics = Object.keys(this.calculated![i].relics);
      if(relics.length > 0) {
        textBuilder = textBuilder + `[${this.getShortName(i)}|${this.calculated![i].points}]: `
        let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].shortName} x ${this.calculated![i].relics[relic]}`});

        textBuilder = textBuilder + mappedRelics.join(', ');
        textBuilder = textBuilder + "  ";
    }
    return textBuilder;
  }

  generateLongTextFor(i: number):string{
    let textBuilder: string = ""

    let relics = Object.keys(this.calculated![i].relics);
      if(relics.length > 0) {
        textBuilder = textBuilder + `[${this.partyNames[i]}|${this.calculated![i].points}]: `;
        let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].name} x ${this.calculated![i].relics[relic]}`});
  
        textBuilder = textBuilder + mappedRelics.join(', ');
        textBuilder = textBuilder + "  ";
    }
    return textBuilder;
  }

  generateLongText() {
    let textBuilder: string = ""
    
    for (let i = 0; i < this.calculated!.length; i++) {
      let relics = Object.keys(this.calculated![i].relics);
      if(relics.length > 0) {
        textBuilder +=`[${this.partyNames[i]}|${this.calculated![i].points}]: \r\n`;
      let mappedRelics = relics.map((relic)=>{return `${RELIC_LIST[relic].name} x ${this.calculated![i].relics[relic]}`});

      let mappedRelicsString = mappedRelics.join("\r\n");
      textBuilder += mappedRelicsString + "\r\n\n";
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

  nameUpdated($event: EventEmitter<string>, i: number, input: HTMLInputElement ) {
    if(this.partyNames[i].length < 1) {
      this.partyNames[i] = `Player ${i+1}`;
      input.value = this.partyNames[i];

    }
    this.partyNamesChange.emit(this.partyNames);
  }

  getShortName(i: number): string {
    if(this.partyNames[i].includes("Player")){
      return this.AION_SYMBOLS[i];
    } else {
    return `${this.AION_SYMBOLS[i]}|${this.partyNames[i]}`;
    }
  }

  copyTextFor(i: number) {
    let text: string = this.generateShortTextFor(i);
    this.clipboard.copy(text);
  }

  copyText(text: string) {
    this.clipboard.copy(text);
  }

  getRowSpan(userRelics: UserRelics){
    // Span the length of player name row, relic(s) and ap row
    return Object.keys(userRelics.relics).length + 2;
  }

  async generateLink() {
   let splits = collection(this.firestore,'splits'); 
   let relics = this.splitConverter.toFirestore(this.calculated);

   const docRef = await addDoc(splits,relics);
   await updateDoc(docRef, {createdAt: serverTimestamp()})
   console.log("Document written with ID: ", docRef.id);
  }
}
