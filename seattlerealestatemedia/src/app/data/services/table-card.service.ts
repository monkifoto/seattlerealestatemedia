import { Injectable } from '@angular/core';
import { TableCard } from '../models/table-card.model';

@Injectable({ providedIn: 'root' })
export class TableCardService {
  blank : TableCard[]=[];
  listOfPhotoCards: TableCard[] = [
    new TableCard(
      'SHOWCASE PACKAGE',
      'The HDR with Flash method for shooting real estate photography involves hand-blending both exposures using professional lighting with natural light exposures to preserve the true colors while evening the light trought the scene.',
      ' ../../../../assets/shutter.svg',
      295
    ),
    new TableCard(
      'ESSENTIAL PACKAGE',
      "HDR photography is popular in real estate. It involves taking multiple exposures and blending them to create an image with visible elements in both dark and bright areas, using available light from windows and fixtures.",
      ' ../../../../assets/shutter.svg',
      225
    ),

  ];

  listOfVideoCards: TableCard[] = [
    new TableCard(
      'Slide Show',
      'A slide show is a visual tour that showcases the property through a series of carefully curated images. It typically includes a collection  photographs that highlight the key features, design elements, and unique selling points of a property.',
      ' ../../../../assets/shutter.svg',
      295
    ),
    new TableCard(
      'Video',
      "A video tour is a dynamic and immersive visual experience that offers potential buyers or renters a virtual walkthrough of a property. Video tours provide a more in-depth and interactive experience compared to static images, allowing viewers to get a better sense of the property's layout, flow, and unique features.",
      ' ../../../../assets/shutter.svg',
      225
    ),
    new TableCard(
      'Social Media',
      "Social media video is a short and engaging video content that is specifically created and optimized for sharing on social media platforms, such as Facebook, Instagram, YouTube, or TikTok, for the purpose of marketing and promoting a property. They are an effective way to increase the visibility and reach of a property listing.",
      ' ../../../../assets/shutter.svg',
      225
    ),

  ];

  listOf3DCards: TableCard[] = [
    new TableCard(
      'Matterport 3D Tour',
      'The HDR with Flash method for shooting real estate photography involves hand-blending both exposures using professional lighting with natural light exposures to preserve the true colors while evening the light trought the scene.',
      ' ../../../../assets/shutter.svg',
      295
    ),
    new TableCard(
      'Zillow 3D Home',
      "HDR photography is popular in real estate. It involves taking multiple exposures and blending them to create an image with visible elements in both dark and bright areas, using available light from windows and fixtures.",
      ' ../../../../assets/shutter.svg',
      225
    ),

  ];

  GetCards(pageName:string) {
    if(pageName === "photo"){
      return this.listOfPhotoCards;
    }
    else if(pageName === "video"){
      return this.listOfVideoCards;
    }
    else  if(pageName === "3d"){
      return this.listOf3DCards;
    }
    else{
      return this.blank;
    }
  }

  AddCard(card: TableCard) {
    this.listOfPhotoCards.push(card);
  }

  RemoveCard(index: number) {
    this.listOfPhotoCards.splice(index, 1);
  }
}
