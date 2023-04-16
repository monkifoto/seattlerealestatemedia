import { Component } from '@angular/core';

@Component({
  selector: 'app-aerial',
  templateUrl: './aerial.component.html',
  styleUrls: ['./aerial.component.scss']
})
export class AerialComponent {
  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
