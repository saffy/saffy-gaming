import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-party-config',
  templateUrl: './party-config.component.html',
  styleUrls: ['./party-config.component.css']
})
export class PartyConfigComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() namesChange = new EventEmitter<string[]>()

  SIZES: number[] = [1,2,3,4,5,6];
  names: string[] = [];
  dialogData: string[] = [];

  constructor(public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.names = new Array<string>(this.size).fill("");
    this.dialogData = this.names;
  }

  ngOnChange() {
    this.dialogData = this.names;
    this.namesChange.emit(this.names);
    this.sizeChange.emit(this.size);
  }

  sizeChanged() {
    this.sizeChange.emit(this.size);
  }

  customize() {
    const dialogRef = this.dialog.open(PartyConfigDialog, {data: {names: this.names.slice(0,this.size)}})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.names = result;
        this.namesChange.emit(this.names);
      }
    });
  }

}

@Component({
  selector: 'party-config-dialog',
  templateUrl: './party-config-dialog.component.html',
  styleUrls: ['./party-config.component.css']
})
export class PartyConfigDialog {
  names: string[];
  constructor(
    public dialogRef: MatDialogRef<PartyConfigDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {names: string[]},
  ) {
    this.names = data.names;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.names, event.previousIndex, event.currentIndex);
  }

  trackByFn(index: number,item:string) {return index;}
}
