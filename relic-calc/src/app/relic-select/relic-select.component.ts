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
  showName: boolean = true && !this.isSmallDevice;
  showAP = false;

  ngOnInit(): void {
  }

  add(relic: string) {
    this.relics[relic].count++;
  }

  subtract(event: MouseEvent, relic: string) {
    event.preventDefault();
    if(this.relics[relic].count >0){
      this.relics[relic].count--;
    }
  }

}
