import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/data/services/storage.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads?: any[];

  constructor(private uploadService: StorageService) { }

  ngOnInit(): void {
    this.fileUploads = this.uploadService.getFilesList(6);
  }
}
