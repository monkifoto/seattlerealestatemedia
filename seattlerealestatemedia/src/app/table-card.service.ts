import { Injectable } from '@angular/core';
import { TableCard } from './table-card.model';

@Injectable({ providedIn: 'root' })
export class TableCardService {
  listOfCards: TableCard[] = [
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

  GetCards() {
    return this.listOfCards;
  }

  AddCard(card: TableCard) {
    this.listOfCards.push(card);
  }

  RemoveCard(index: number) {
    // console.log(index);
    this.listOfCards.splice(index, 1); 
    // console.log(this.listOfCards);
  }
}
