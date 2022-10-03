import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { relicList } from '../global';

@Component({
  selector: 'app-relic-select',
  templateUrl: './relic-select.component.html',
  styleUrls: ['./relic-select.component.css']
})
export class RelicSelectComponent implements OnInit {
  @Input() relics!: {[index:string]:{count:number}};
  @Output() relicsChange = new EventEmitter<any>();

  constructor() { }

  showName: boolean = true;
  showAP = false;
  showMedals = false;
  relicList = relicList;

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
