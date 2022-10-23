import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Firestore, collection, collectionData,doc,getDoc, addDoc,serverTimestamp, updateDoc, docSnapshots, DocumentData, DocumentSnapshot, SnapshotOptions} from '@angular/fire/firestore';
import { CalculatedRelics, UserRelics } from '../global';
import { stringify } from 'querystring';
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
    let document = doc(firestore,'splits', 'code'); 

    return this.afs.collection('splits').doc<Splits>(code).valueChanges();
  }
}
