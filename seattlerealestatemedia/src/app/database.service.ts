import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { customerRequest } from 'src/app/customerRequest';
import { user } from './user';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  constructor(
    private store: AngularFirestore
  ) {}

  addBooking(cr:customerRequest){
    this.store.collection('bookingRequests').add(Object.assign({}, cr));
  }

  getBookings(){
    return this.store.collection('bookingRequests').valueChanges() as Observable<customerRequest[]>;
  }

  deleteBooking(cr:customerRequest){
    // not implemented
  }

  getUsers(){
    return this.store.collection('users').valueChanges() as Observable<user[]>;
  }

}
