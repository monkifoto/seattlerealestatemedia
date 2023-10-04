import { Component } from '@angular/core';

@Component({
  selector: 'app-tour3d',
  templateUrl: './tour3d.component.html',
  styleUrls: ['./tour3d.component.scss']
})
export class Tour3dComponent {

  scrollTo(element: any): void {
    // console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
