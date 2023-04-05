import { Injectable } from '@angular/core';
import { CarouselImage } from './carousel.model';
import { aerialImages } from './images';
import { photographyImages } from './images';
import { floorPlanImages } from './images';
import { stagingImages } from './images';

@Injectable({ providedIn: 'root' })
export class CarouselService {
    
    photographyListOfImages = photographyImages;
    aerialListOfImages = aerialImages;
    floorPlanListOfImages = floorPlanImages;
    stagingListOfImages = stagingImages
  
    GetPhotographyImages() {
      return this.photographyListOfImages;
    }

    GetAerialImages(){
        return this.aerialListOfImages;
    }

    GetFloorPlanImages(){
        return this.floorPlanListOfImages;
    }
    GetStagingImages(){
        return this.stagingListOfImages;
    }
  
  }

