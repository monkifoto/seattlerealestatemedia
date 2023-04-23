import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { customerRequest } from 'src/app/customerRequest';
import { user } from './user';
import { emailMessage } from './emailMessage';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  listOfBookings : customerRequest[] = [];
  items: any[] = [];

  constructor(
    private store: AngularFirestore
  ) {}

  addBooking(cr:customerRequest, message:emailMessage){
    this.store.collection('bookingRequests').add(Object.assign({}, cr));
    this.sendMail( message);
    //this.store.collection('mail').add(Object.assign({}, message));
  }

  getBookings(){
    this.getBookingCount();
  this.getBookingsWithMetaData();

    return this.store.collection('bookingRequests').valueChanges() as Observable<customerRequest[]>;
  }

  //not working
  getBookingsWithMetaData(){

    let  bookingRef = this.store.collection('bookingRequests');
    const snapshot = bookingRef.get();
    snapshot.forEach(doc =>{
      console.log(doc.docs.length);// number of documents.
    })

  }
//not working
  getBookingCount(){
    let count = 0;
    let  bookingRef = this.store.collection('bookingRequests').snapshotChanges().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        };
      });
    });
    this.items.forEach(item =>{
      console.log('stupid array item' + item)
    })

  }

  deleteBooking(cr:customerRequest){
    // not implemented
  }

  getUsers() : Observable<user[]>{
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
