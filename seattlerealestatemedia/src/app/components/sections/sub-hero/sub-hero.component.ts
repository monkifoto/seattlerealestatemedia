import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-hero',
  templateUrl: './sub-hero.component.html',
  styleUrls: ['./sub-hero.component.scss']
})
export class SubHeroComponent {


scrollTo(element: any): void {
  // console.log(element);
  (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}
