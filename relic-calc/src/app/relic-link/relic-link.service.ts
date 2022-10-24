import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Firestore, DocumentSnapshot, SnapshotOptions, doc} from '@angular/fire/firestore';
import { CalculatedRelics, UserRelics } from '../global';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


type Split = {
  player: string;
  relics: {name: string, value: number}[];
  total: number;
};

export type Splits = {split: Split[], createdAt: {seconds: number, nanoseconds: number}}

@Injectable({
  providedIn: 'root'
})
export class RelicLinkService {
  splitConverter = {

 fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): CalculatedRelics => {
  let relics: UserRelics[] = [];
  const splits = snapshot.get('split');
  for(let split of splits) {
    let castSplit: Split = split;
    let user: UserRelics = {points: castSplit.total, relics: {}};
    castSplit.relics.forEach((relic) => user.relics[relic.name]++);
    relics.push(user);
  }
 
  return relics;
  
} }

  constructor(private afs:AngularFirestore) { }

getStringOutput(firestore: Firestore, code: string ): Observable<any> {
    return this.afs.collection('splits').doc<Splits>(code).valueChanges();
  }


}
