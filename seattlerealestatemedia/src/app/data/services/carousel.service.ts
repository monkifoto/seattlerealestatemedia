import { Injectable } from '@angular/core';
import { CarouselImage } from '../models/carousel.model';
import { aerialImages } from '../models/images';
import { photographyImages } from '../models/images';
import { floorPlanImages } from '../models/images';
import { stagingImages } from '../models/images';
import { servicesImages } from '../models/images';

@Injectable({ providedIn: 'root' })
export class CarouselService {

    photographyListOfImages = photographyImages;
    aerialListOfImages = aerialImages;
    floorPlanListOfImages = floorPlanImages;
    stagingListOfImages = stagingImages;
    serviceListOfImages = servicesImages;

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

    GetServiceImages(){
      return this.serviceListOfImages;
    }

  }

