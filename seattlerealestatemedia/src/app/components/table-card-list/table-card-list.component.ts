import { Component } from '@angular/core';
import { TableCard } from '../../table-card.model';
import { TableCardService } from '../../table-card.service';

@Component({
  selector: 'app-table-card-list',
  templateUrl: './table-card-list.component.html',
  styleUrls: ['./table-card-list.component.scss']
})
export class TableCardListComponent {
  listOfCards: TableCard[] = [];
  constructor(private tblSvc: TableCardService){

}

ngOnInit(){
  this.listOfCards = this.tblSvc.GetCards();
  // console.log("table card list");
  // console.log(this.listOfCards);
}

}
