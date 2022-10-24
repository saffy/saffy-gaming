import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, elementAt, map, take, tap } from 'rxjs/operators';
import { Firestore, collection, collectionData,doc,addDoc, updateDoc} from '@angular/fire/firestore';
import { CalculatedRelics, RELIC_LIST } from '../global';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from "firebase/firestore";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LootTableService {
  _code = new Subject<string>;

  splitConverter = {toFirestore: (calculated: CalculatedRelics) => {
    let split = [];
    for (let i = 0; i < calculated!.length; i++) {
      let relics: Array<{name: string, value: number}> = [];
      Object.entries(calculated[i].relics).forEach(([key,number]) => {
        let nRelics = new Array(number).fill({name: RELIC_LIST[key].name, value: RELIC_LIST[key].points});
        relics.push(...nRelics);
      })
      
      let playerObj = 
        {player: `Player ${i+1}`,
        relics: relics, 
        total: calculated![i].points
      };
    split.push(playerObj);
    
  }
    return {split: split, createdAt: serverTimestamp()};
}}
  constructor(private http: HttpClient, private firestore: Firestore, private afs:AngularFirestore) { 
  }

  generateCode(){
    return this.http.get('../../assets/names.txt', {responseType: 'text'}).pipe(
      take(1),
     map(string => string.split("\n"))
    )
  }

  createLink(calculated: CalculatedRelics): Observable<string> {
    let relics = this.splitConverter.toFirestore(calculated);
    let code = '';

    this.generateCode().subscribe(string => {
      const random = Math.floor(Math.random() * string.length);
      console.log(random, string.length);
      code = string[random].trim();
      const n = Math.floor(Math.random() * 99);
      this._code.next(`${code}${n}`);
      this.afs.collection('splits').doc(`${code}${n}`).set(relics);
    });
    return this._code.asObservable();
   }
}
