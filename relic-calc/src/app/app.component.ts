import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relic-calc';
  size: number = 6;
  relics: {[index:string]:number} = 
  {'Lesser_Ancient_Crown': 0,
  'Lesser_Ancient_Goblet': 0,
   'Lesser_Ancient_Icon': 0 ,
   'Lesser_Ancient_Seal': 0,
   'Ancient_Crown': 0 ,
   'Ancient_Goblet': 0 ,
   'Ancient_Icon': 0 ,
   'Ancient_Seal': 0 ,
   'Greater_Ancient_Crown': 0,
   'Greater_Ancient_Goblet': 0  ,
   'Greater_Ancient_Icon': 0 ,
   'Greater_Ancient_Seal': 0  ,
   'Major_Ancient_Crown': 0  ,
   'Major_Ancient_Goblet': 0  ,
   'Major_Ancient_Icon': 0  ,
   'Major_Ancient_Seal': 0};

   calculate() {
    let split: number[] = new Array(this.size);

    //order by most expensive to least
    //if zero points, add relic
    //if has points, check if next person has less points. if less points, keep going until last OR next person has more points
    
    return split;

   }
}
