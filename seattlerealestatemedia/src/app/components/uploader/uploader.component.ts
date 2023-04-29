import { Component } from '@angular/core';
//import {Storage, ref, uploadBytesResumable, getDownloadURL}  from '@angular/fire/storage'
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { FileUpload } from 'src/app/data/models/FileUpload';
import { StorageService } from 'src/app/data/services/storage.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private uploadService: StorageService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  // public file : any ={};
  // public basePath ='/uploads/';
  // selectedFiles?: FileList;

  // constructor(public storage: AngularFireStorage){}

  // chooseFile(event:any){
  //   this.file = event.target.files[0];
  // }

  // upload(){
  //   this.storage.upload(this.basePath+Math.random()+this.file.name, this.file)
  //   console.log(this.file);
  // }


}
