import { Component, EventEmitter } from '@angular/core';
import { CalculatedRelics } from './global';
import { LootTableComponent } from './loot-table/loot-table.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

type Relic = {
  id: string;
  count: number;
  points: number;
};

type SelectedRelics = {
  [key:string]: {count:number,points:number}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  // Default number to split relics amongst.
  size: number = 6;

  // Optional: names of party members
  partyNames: string[] = [];

  calculated: CalculatedRelics = [];
  
  // Model of currently selected relics
  relics: SelectedRelics = 
  {'Lesser_Ancient_Crown': {count: 0,points: 2400 },
  'Lesser_Ancient_Goblet': {count: 0, points: 1200},
   'Lesser_Ancient_Icon': {count: 0, points: 300} ,
   'Lesser_Ancient_Seal': {count: 0, points: 600},
   'Ancient_Crown': {count: 0, points: 4800} ,
   'Ancient_Goblet': {count: 0, points: 2400} ,
   'Ancient_Icon': {count: 0, points: 600} ,
   'Ancient_Seal': {count: 0, points: 1200} ,
   'Greater_Ancient_Crown': {count: 0, points: 7200},
   'Greater_Ancient_Goblet':{count: 0, points: 3600},
   'Greater_Ancient_Icon':{count: 0, points: 900},
   'Greater_Ancient_Seal':{count: 0, points: 1800},
   'Major_Ancient_Crown':{count: 0, points: 9600},
   'Major_Ancient_Goblet':{count: 0, points: 4800},
   'Major_Ancient_Icon':{count: 0, points: 1200},
   'Major_Ancient_Seal': {count: 0, points: 2400}
  };

  /**
   * Transforms relic model into a list of selected relics and sorts by AP.
   * @returns sorted array of relics by points value descending
   */
   transform(): Array<Relic> {
    let filteredRelics: Array<Relic> = [];
    for(var relic of Object.keys(this.relics)) {
      if (this.relics[relic].count >0) {
        filteredRelics.push({id: relic, count: this.relics[relic].count, 
          points: this.relics[relic].points});
      }
    }
    filteredRelics.sort(
      (a,b) => {
        return b.points - a.points;
      }
    );
    return filteredRelics;
   }

   /**
    * Calculates relics for each party member, takes largest relic (filteredRelics[0] is sorted) and performs an insertion sort.
    * 
    * @param size party size
    */
   calculate(size: number) {
    // Map is slow for performance reasons, but this only deals with a range of (2,6)
    let split: CalculatedRelics = new Array(size).fill({}).map(u => ({relics:{}, points:0}));
    let filteredRelics = this.transform();

    let lastPerson = split.length-1;
    while(filteredRelics.length > 0) {
      // Push or increment count
      let newCount = split[lastPerson].relics[filteredRelics[0].id] + 1 || 1;
      split[lastPerson].relics[filteredRelics[0].id] = newCount;
      split[lastPerson].points = split[lastPerson].points + filteredRelics[0].points;
      filteredRelics[0].count--;
      if(filteredRelics[0].count <= 0){
        // If the relic was the last one of its type, remove.
        filteredRelics = filteredRelics.slice(1);
      }
      let personIndex: number = lastPerson;
      while (split[0] != split[personIndex] && personIndex >= 0) {
        if(split[personIndex].points >= split[personIndex-1].points) {
          let saved = split[personIndex];
          split[personIndex] = split[personIndex-1];
          split[personIndex-1] = saved;
        }
        personIndex--;

      }
   }
   this.calculated = split;

   this.open();
  }

  namesChange(names: string[]) {
    this.partyNames = names;
  }

  open() {
    this._bottomSheet.open(LootTableComponent, {data: {calculatedRelics: this.calculated, partySize: this.size, partyNames: this.partyNames}});
  }
  
}
