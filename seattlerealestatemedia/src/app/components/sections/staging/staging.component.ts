import { Component } from '@angular/core';

@Component({
  selector: 'app-staging',
  templateUrl: './staging.component.html',
  styleUrls: ['./staging.component.scss']
})
export class StagingComponent {
  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
