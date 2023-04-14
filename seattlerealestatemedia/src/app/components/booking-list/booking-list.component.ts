import { Component } from '@angular/core';
import { customerRequest } from 'src/app/customerRequest';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent {
  listOfBootings: customerRequest[] = [];
  constructor(private db: DatabaseService) {}
  ngOnInit() {
    this.db.getBookings().subscribe((cr) => {
      this.listOfBootings = cr as customerRequest[];
    });
    this.listOfBootings.forEach((element) => {
      console.log(element);
    });
  }
}
