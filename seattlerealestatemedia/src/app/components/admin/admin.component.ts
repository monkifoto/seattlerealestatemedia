import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  tabIndex = 0 ;

  constructor() {
  }

  ngOnInit(){
    let bookings = document.querySelector('.adminTabs') as HTMLDivElement;
    let login = document.querySelector('.login') as HTMLDivElement;
    bookings.style.display = 'none';
    login.style.display = 'block';
  }

  onAuthenticated(value:any){

    console.log(value);
    //show bookinds and hide login component if true
    if(value == true){
    let bookings = document.querySelector('.adminTabs') as HTMLDivElement;
    bookings.style.display = 'block';
    let login = document.querySelector('.login') as HTMLDivElement;
    login.style.display = 'none';
    }



  }

  changeTab(event: { index: any; }){
    console.log(event.index)
    this.tabIndex = event.index;
  }

}
