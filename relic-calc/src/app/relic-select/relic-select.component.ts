import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { relicList } from '../global';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-relic-select',
  templateUrl: './relic-select.component.html',
  styleUrls: ['./relic-select.component.css']
})
export class RelicSelectComponent implements OnInit {
  @Input() relics!: {[index:string]:{count:number}};
  @Output() relicsChange = new EventEmitter<any>();

  constructor() { }

  showMedals = false;
  relicList = relicList;
  isSmallDevice = window.matchMedia("screen and (max-width: 700px)")
  showName: boolean = false;
  showAP = false;

  ngOnInit(): void {
  }

  add(relic: string) {
    this.relics[relic].count++;
  }

  // on mobile this should allow users to select a size from popup
  subtract(event: MouseEvent, relic: string) {
    event.preventDefault();
    if(this.relics[relic].count >0){
      this.relics[relic].count--;
    }
  }

  resetRelics(_event: MouseEvent) {
    for (let relic of Object.keys(this.relics)) {
     this.relics[relic].count = 0;
    }
    this.relicsChange.emit(this.relics);
  }

}
