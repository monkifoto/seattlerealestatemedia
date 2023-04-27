import { Component } from '@angular/core';

@Component({
  selector: 'app-air-bn-b',
  templateUrl: './air-bn-b.component.html',
  styleUrls: ['./air-bn-b.component.scss']
})
export class AirBnBComponent {
  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
