import { Component, Input } from '@angular/core';
import { TableCard } from '../../data/models/table-card.model';
import { TableCardService } from '../../data/services/table-card.service';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() tableCard?: TableCard;
  @Input() index : number = 0;

  constructor(private tblSvc : TableCardService){};

  ngOnInit():void{
    // console.log(this.tableCard);
  }

}
