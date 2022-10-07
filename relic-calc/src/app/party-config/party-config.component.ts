import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-party-config',
  templateUrl: './party-config.component.html',
  styleUrls: ['./party-config.component.css']
})
export class PartyConfigComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() nameSizeChange = new EventEmitter<string[]>()

  sizes: number[] = [1,2,3,4,5,6];
  names: string[];
  constructor() {
    this.names = this.sizes.map((size) => "");
   }

  ngOnInit(): void {
    
  }

  ngOnChange() {
    this.names = this.sizes.map((size) => "");
    this.nameSizeChange.emit(this.names);
  }

  sizeChanged() {
    this.sizeChange.emit(this.size);
    this.nameSizeChange.emit(this.names);
  }

}
