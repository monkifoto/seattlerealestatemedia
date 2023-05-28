import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { customerRequest } from 'src/app/data/models/customerRequest';
import { user } from '../models/user';
import { emailMessage } from '../models/emailMessage';
import { contactMessage } from '../models/contactMessage';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  listOfBookings: customerRequest[] = [];

  constructor(private afs: AngularFirestore) {}

    //not working
    getBookingsWithMetaData() {
      return this.afs.collection('bookingRequests').snapshotChanges();
    }

  //create booking
  addBooking(cr: customerRequest) {
    cr.id = this.afs.createId();
    this.sendMail(cr);
    return this.afs.collection('bookingRequests').add(Object.assign({}, cr));
  }

  //deleteBooking
  deleteBooking(cr: customerRequest) {
    this.afs.doc('/bookingRequests/' + cr.id).delete();
  }

  //updatebooking
  updateBooking(cr:customerRequest){
    this.deleteBooking(cr);
    this.addBooking(cr);
  }

  getAllBookings(): customerRequest[] {
    //console.log('get all bookings');
    this.getBookingsWithMetaData().subscribe({
      next: (res) => {
        //console.log('Next getting bookings ');
      this.listOfBookings = res.map((book: any) =>{
        const data = book.payload.doc.data();
        data.id = book.payload.doc.id;
        //console.log(data.id);
        return data;

      })
      this.listOfBookings.forEach(booking => {
        //console.log('looping' + booking.id);
      })
      return this.listOfBookings;
    },
    error:(err)  => {
      console.log('Error getting bookings ' + err);
      return err;
      //alert('Error getting bookings ' + err)
    },
    complete:() =>{
      //console.log('Complete getting bookings ');
    }

  })
  return this.listOfBookings;
  }


  getUsers(): Observable<user[]> {
    return this.afs.collection('users').valueChanges() as Observable<user[]>;
  }

  //add booking to the email queue to send to admin.
  sendMail(cr: customerRequest) {

    let emailTo = 'seattlerealestatephoto@gmail.com';
    let emailSubject = cr.name + ' created a new booking from the website!';

    this.afs.collection('mail').add({
      to: emailTo,
      message: {
        subject: emailSubject,
        html: cr.toString()
      },
    });
  }

  sendContactRequest(cm: contactMessage) {

    let emailTo = 'seattlerealestatephoto@gmail.com';
    let emailSubject = cm.name + ' sent you a message via the website!!!';

    this.afs.collection('mail').add({
      to: emailTo,
      message: {
        subject: emailSubject,
        html: cm.toString()
      },
    });
  }
}
