import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { RelicLinkService, Splits } from './relic-link.service';
import { Firestore } from '@angular/fire/firestore';
import { CalculatedRelics } from '../global';
import { from, Subject } from 'rxjs';
import { LootTableService } from '../loot-table/loot-table.service';

type Split = {
  player: string;
  relics: {name: string, value: number}[];
  total: number;
};

@Component({
  selector: 'app-relic-link',
  templateUrl: './relic-link.component.html',
  styleUrls: ['./relic-link.component.css']
})
export class RelicLinkComponent implements OnInit {
  code: string = '';
  codeOutput: string = '';
  output: Splits|undefined;
  subj: Subject<Splits> = new Subject();
  

  constructor(
    private route: ActivatedRoute,
    private linkService: RelicLinkService,
    private location: Location,
    private firestore: Firestore, 
  ) {}

  ngOnInit(): void {
    this.code = this.getCode();
    this.linkService.getStringOutput(this.firestore, this.code).subscribe(output => {
      this.output = output;
      this.subj.next(output);
    });
  }
  getCode() {
    const code = String(this.route.snapshot.paramMap.get('code'));
    return code;
  }

  total(splits: Split[]){
    return splits.reduce((pv,cv) => pv + cv.total,0)
  }


}
