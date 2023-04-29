import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/data/services/storage.service';
import { FileUpload } from 'src/app/data/models/FileUpload';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: StorageService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: FileUpload): void {
     this.uploadService.deleteFile(fileUpload);
  }
}
