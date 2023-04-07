import { Injectable } from '@angular/core';
import { TableCard } from './table-card.model';

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
      'The HDR with Flash method for shooting real estate photography involves hand-blending both exposures using professional lighting with natural light exposures to preserve the true colors while evening the light trought the scene.',
      ' ../../../../assets/shutter.svg',
      295
    ),
    new TableCard(
      'Video',
      "HDR photography is popular in real estate. It involves taking multiple exposures and blending them to create an image with visible elements in both dark and bright areas, using available light from windows and fixtures.",
      ' ../../../../assets/shutter.svg',
      225
    ),
    new TableCard(
      'Social Media',
      "HDR photography is popular in real estate. It involves taking multiple exposures and blending them to create an image with visible elements in both dark and bright areas, using available light from windows and fixtures.",
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
