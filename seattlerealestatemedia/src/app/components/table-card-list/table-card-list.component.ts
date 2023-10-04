import { Component, Input } from '@angular/core';
import { TableCard } from '../../data/models/table-card.model';
import { TableCardService } from '../../data/services/table-card.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-table-card-list',
  templateUrl: './table-card-list.component.html',
  styleUrls: ['./table-card-list.component.scss']
})
export class TableCardListComponent {
  @Input() pageName : string = '';
  listOfCards?: TableCard[] = [];
  listOfServiceCards?: TableCard[] = [];
  constructor(private tblSvc: TableCardService){
}

ngOnInit(){

  console.log('Calling GetSectionCards for page' + this.pageName);
  this.tblSvc.GetServiceCard(this.pageName).subscribe({
    next:(response) => {
      this.listOfServiceCards = response.map((card:any)=>{
        const data = card.payload.doc.data();
        data.id = card.payload.doc.id;
        return <TableCard>data;
      })
      this.listOfCards = this.listOfServiceCards
    },
    error:(error) =>{
      console.log('Error getting Service cards');
    },
    complete() {

    },
  })

}

}

