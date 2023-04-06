import { Component, Input } from '@angular/core';
import { TableCard } from '../../table-card.model';
import { TableCardService } from '../../table-card.service';

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

  onDelete(){
    this.tblSvc.RemoveCard(this.index);
  }
}
