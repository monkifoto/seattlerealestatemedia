import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { customerRequest } from 'src/app/customerRequest';
import { user } from './user';
import { emailMessage } from './emailMessage';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  constructor(
    private store: AngularFirestore
  ) {}

  addBooking(cr:customerRequest, message:emailMessage){
    this.store.collection('bookingRequests').add(Object.assign({}, cr));
    this.sendMail( message);
    //this.store.collection('mail').add(Object.assign({}, message));
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

  sendMail(message:emailMessage){
    this.store.collection('mail').add({
      to: 'seattlerealestatephoto@gmail.com',
      message: {
        subject: 'New booking from the website!',
        html: message.message,
      },
    });
  }

}
