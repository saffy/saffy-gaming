import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

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

  relicList = [
  { id: 'Lesser_Ancient_Crown', name: 'Lesser Ancient Crown', points: 2400 }, 
  { id: 'Lesser_Ancient_Goblet', name: 'Lesser Ancient Goblet', points: 1200  }, 
  { id: 'Lesser_Ancient_Icon',name: 'Lesser Ancient Icon', points: 300  }, 
  { id: 'Lesser_Ancient_Seal',name: 'Lesser Ancient Seal', points: 600 },
  { id: 'Ancient_Crown', name: 'Ancient Crown', points: 4800 }, 
  { id: 'Ancient_Goblet', name: 'Ancient Goblet', points: 2400 }, 
  { id: 'Ancient_Icon', name: 'Ancient Icon', points: 600  }, 
  { id: 'Ancient_Seal', name: 'Ancient Seal', points: 1200  },
  { id: 'Greater_Ancient_Crown', name: 'Greater Ancient Crown', points: 7200 }, 
  { id: 'Greater_Ancient_Goblet',name: 'Greater Ancient Goblet', points: 3600  }, 
  { id: 'Greater_Ancient_Icon',name: 'Greater Ancient Icon', points: 900 }, 
  { id: 'Greater_Ancient_Seal',name: 'Greater Ancient Seal', points: 1800  },
  { id: 'Major_Ancient_Crown',name: 'Major Ancient Crown', points: 9600  }, 
  { id: 'Major_Ancient_Goblet',name: 'Major Ancient Goblet', points: 4800  }, 
  { id: 'Major_Ancient_Icon',name: 'Major Ancient Icon', points: 1200  }, 
  { id: 'Major_Ancient_Seal',name: 'Major Ancient Seal', points: 2400  }]

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
