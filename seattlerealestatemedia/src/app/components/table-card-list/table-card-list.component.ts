import { Component, Input } from '@angular/core';
import { TableCard } from '../../data/models/table-card.model';
import { TableCardService } from '../../data/services/table-card.service';

@Component({
  selector: 'app-table-card-list',
  templateUrl: './table-card-list.component.html',
  styleUrls: ['./table-card-list.component.scss']
})
export class TableCardListComponent {

  @Input() pageName : string = '';

  listOfCards?: TableCard[] = [];
  constructor(private tblSvc: TableCardService){

}

ngOnInit(){
  this.listOfCards = this.tblSvc.GetCards(this.pageName);
}

}
