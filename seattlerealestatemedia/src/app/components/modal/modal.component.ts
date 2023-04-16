import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title : string = "";
  @Input() description : string ="";
  @Input() pageName : string = "";

  modalTitle : string = '';
  modalDescription : string ='';
  modalPageName:string ='';

  isModalOpen: boolean = false;

  constructor(private dialog: MatDialog) { }

ngOnInit(){
  this.modalTitle = this.title;
  this.modalDescription = this.description;
  this.modalPageName = this.pageName;
  console.log("onInit " + this.modalTitle + ' desc: ' + this.modalDescription + 'page: '+ this.modalPageName);
}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      description: this.modalDescription,
      title: this.modalTitle,
      pageName : this.modalPageName
    };

    this.dialog.open(ModalContentComponent, dialogConfig);

  }

  closeModal() {
    this.isModalOpen = false;
  }
}
