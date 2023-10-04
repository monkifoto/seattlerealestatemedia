import { TableCard } from '../models/table-card.model';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableCardService {
  constructor(private afs: AngularFirestore) {}

  AddServiceCard(card:TableCard){
    card.ID = this.afs.createId();
    return this.afs.collection('service_cards').add(Object.assign({}, card));
  }

  GetServiceCard(section: string){
    return this.afs.collection('service_cards', ref => ref.where("Section","==",section)).snapshotChanges();
  }


}
