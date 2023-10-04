import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/data/services/storage.service';
import { FileUpload } from 'src/app/data/models/FileUpload';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads?: FileUpload[] = [];

  constructor(private uploadService: StorageService) { }

  ngOnInit(): void {

    this.uploadService.getFiles().subscribe({
      next: (res: any[]) => {
      this.fileUploads = res.map((file: any) =>{
        const data = file.payload.doc.data();
        data.id = file.payload.doc.id;
        return data;

      })
      this.fileUploads.forEach(file => {
        console.log('looping' + file.key);
      })
      return this.fileUploads;
    },
    error:(err)  => {
      console.log('Error getting bookings ' + err);
      return err;
    },
    complete:() =>{

    }

  })

  }
}
