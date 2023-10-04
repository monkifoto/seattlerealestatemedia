import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-combined',
  templateUrl: './photos-combined.component.html',
  styleUrls: ['./photos-combined.component.scss']
})
export class PhotosCombinedComponent {
  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
