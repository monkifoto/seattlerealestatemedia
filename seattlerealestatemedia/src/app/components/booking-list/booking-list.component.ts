import { Component } from '@angular/core';
import { customerRequest } from 'src/app/data/models/customerRequest';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent {
  listOfBookings: customerRequest[] = [];
  count: number = 0;
  constructor(private db: DatabaseService) {}
  ngOnInit() {

      this.db.getBookingsWithMetaData()
      .subscribe({
        next: (res) => {
          //console.log('Next getting bookings ');
        this.listOfBookings = res.map((book: any) =>{
          const data = book.payload.doc.data();
          data.id = book.payload.doc.id;
          return data;

        }).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.count = this.listOfBookings.length;
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
    this.count = this.listOfBookings.length;
  }



  onDelete(booking: customerRequest){
    if(window.confirm("Are you sure you want to delete this booking " + booking.id +"?"))
    this.db.deleteBooking(booking);
  }
}
