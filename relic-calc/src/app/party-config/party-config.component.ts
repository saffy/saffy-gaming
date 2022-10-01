import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-config',
  templateUrl: './party-config.component.html',
  styleUrls: ['./party-config.component.css']
})
export class PartyConfigComponent implements OnInit {
  partySize: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
