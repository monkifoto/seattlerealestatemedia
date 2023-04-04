import { Component, Input } from '@angular/core';

import { CarouselService } from 'src/app/carousel.service';
import { CarouselImage } from 'src/app/carousel.model';

@Component({
  selector: 'app-dynamic-image-carousel',
  templateUrl: './dynamic-image-carousel.component.html',
  styleUrls: ['./dynamic-image-carousel.component.scss']
})
export class DynamicImageCarouselComponent {
  @Input() galleryType : string | undefined;

  listOfImages: CarouselImage[] = [];
  constructor(private carouselSvc: CarouselService){}


  //images = IMAGES;
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    if(this.galleryType == 'aerial'){
      this.listOfImages = this.carouselSvc.GetAerialImages();
    }
    else if(this.galleryType == 'photos'){
      this.listOfImages = this.carouselSvc.GetPhotographyImages();
    }
      
      this.startInterval();
  }

  ngOnDestroy() {
    this.stopInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? (this.listOfImages.length - 1) : (this.currentIndex - 1);
    this.stopInterval();
    this.startInterval();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.listOfImages.length - 1) ? 0 : (this.currentIndex + 1);
    this.stopInterval();
    this.startInterval();
  }

  goToImage(index: number) {
    this.currentIndex = index;
    this.stopInterval();
    this.startInterval();
  }

}
