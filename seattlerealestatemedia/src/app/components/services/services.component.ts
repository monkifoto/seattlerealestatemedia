import { Component } from '@angular/core';
import { CarouselImage } from 'src/app/data/models/carousel.model';
import { servicesImages } from 'src/app/data/models/images';
import { CarouselService } from 'src/app/data/services/carousel.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

 listOfImages: CarouselImage[] = [];
 currentIndex = 0;
 interval: any;

 constructor(private svc: CarouselService){}

 ngOnInit(){
  this.listOfImages = this.svc.GetServiceImages();

 }

 onMouseOver(event: MouseEvent) {
  const element = event.target as HTMLDivElement;
  const title = element.firstChild?.textContent;
  console.log(title);
  const img = document.getElementById("img_"+title) as HTMLElement;
  img.classList.add("clsO");
}

onMouseOut(event: MouseEvent) {
  const element = event.target as HTMLDivElement;
  const title = element.firstChild?.textContent;
  const img = document.getElementById("img_"+title) as HTMLElement;
  img.classList.remove("clsO");
}

}
