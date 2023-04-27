import { Component } from '@angular/core';

@Component({
  selector: 'app-property-managment',
  templateUrl: './property-managment.component.html',
  styleUrls: ['./property-managment.component.scss']
})
export class PropertyManagmentComponent {
  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
