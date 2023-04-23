import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {



  ngOnInit(){
    let bookings = document.querySelector('.bookings') as HTMLDivElement;
    let login = document.querySelector('.login') as HTMLDivElement;
    bookings.style.display = 'none';
    login.style.display = 'block';
  }

  onAuthenticated(value:any){

    console.log(value);
    //show bookinds and hide login component if true
    if(value == true){
    let bookings = document.querySelector('.bookings') as HTMLDivElement;
    bookings.style.display = 'block';
    let login = document.querySelector('.login') as HTMLDivElement;
    login.style.display = 'none';
    }



  }

}
