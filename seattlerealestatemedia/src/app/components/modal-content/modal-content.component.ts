import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  // @Input() title: string | undefined;

  // @Input() description: string | undefined;

  description:string='';
  title:string ='';
  pageName:string ='';

  constructor(
    private dialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {

    this.description = data.description;
    this.title = data.title;
    this.pageName = data.pageName;
}

  onClose() {
    this.dialogRef.close();
  }
}
