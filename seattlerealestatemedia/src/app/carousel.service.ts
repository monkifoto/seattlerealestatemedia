import { Injectable } from '@angular/core';
import { CarouselImage } from './carousel.model';
import { aerialImages } from './images';
import { photographyImages } from './images';

@Injectable({ providedIn: 'root' })
export class CarouselService {
    
    photographyListOfImages = photographyImages;
    aerialListOfImages = aerialImages;
  
    GetPhotographyImages() {
      return this.photographyListOfImages;
    }

    GetAerialImages(){
        return this.aerialListOfImages;
    }
  
  }

