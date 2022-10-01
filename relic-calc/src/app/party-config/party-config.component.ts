import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-party-config',
  templateUrl: './party-config.component.html',
  styleUrls: ['./party-config.component.css']
})
export class PartyConfigComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit(): void {
  }

}
