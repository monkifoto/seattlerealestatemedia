import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryStorageService } from 'src/app/data/services/gallery-storage.service';
import { GalleryService } from 'src/app/data/services/gallery.service';
import { FileUpload } from 'src/app/data/models/FileUpload';
import { Gallery } from 'src/app/data/models/gallery.model';

interface UploadProgress {
  file: FileUpload;
  progress: number;
  downloadURL?: string;
}

@Component({
  selector: 'app-gallery-upload',
  templateUrl: './gallery-upload.component.html',
  styleUrls: ['./gallery-upload.component.scss']
})


export  class GalleryUploadComponent implements OnInit {
  galleryId: string = '';
  galleryDetails?: Gallery;
  selectedFiles: FileUpload[] = [];
  existingFiles: FileUpload[] = [];
  galleryFiles: FileUpload[] = [];
  uploadProgress: { [key: string]: number } = {}; // Track progress for each file
  private maxConcurrentUploads = 3; // Maximum concurrent uploads

  constructor(
        private route: ActivatedRoute,
        private storageService: GalleryStorageService,
        private galleryService: GalleryService
      ) {}


    ngOnInit(): void {
    this.galleryId = this.route.snapshot.paramMap.get('id')!;
    this.loadGalleryDetails();
    this.loadGalleryFiles();

  }


  loadGalleryDetails() {
    this.galleryService.getGalleryDetails(this.galleryId).subscribe(details => {
      this.galleryDetails = details;
      console.log(this.galleryDetails)
    });
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      const files: File[] = Array.from(input.files);
      console.log('Selected files:', files);
      this.selectedFiles = files.map(file => new FileUpload(file));
    } else {
      console.error('No files selected');
    }
  }

  async uploadFiles() {
    // Function to handle the upload of a single file
    const uploadFile = async (fileUpload: FileUpload) => {
      if (!fileUpload.file) {
        console.error('File is undefined in FileUpload object');
        return;
      }

      // Initialize progress for each file
      this.uploadProgress[fileUpload.file.name] = 0;

      return new Promise((resolve, reject) => {
        this.storageService.pushFileToStorage(fileUpload, this.galleryId).subscribe({
          next: ({ progress, downloadURL }) => {
            this.uploadProgress[fileUpload.file.name] = progress;
            if (downloadURL) {
              console.log(`File available at: ${downloadURL}`);
              // Optionally save downloadURL to Firestore or elsewhere
            }
          },
          error: (err) => {
            console.error('Upload error', err);
            reject(err);
          },
          complete: () => resolve(fileUpload.file.name)
        });
      });
    };

    // Create a function to process files in batches
    const processBatch = async (files: FileUpload[]) => {
      // Process each file in the batch and wait for all to complete
      const batchPromises = files.map(fileUpload => uploadFile(fileUpload));
      try {
        await Promise.all(batchPromises);
      } catch (error) {
        console.error('Error uploading files in batch', error);
      }
    };

    // Process files in batches of up to maxConcurrentUploads
    for (let i = 0; i < this.selectedFiles.length; i += this.maxConcurrentUploads) {
      const batch = this.selectedFiles.slice(i, i + this.maxConcurrentUploads);
      await processBatch(batch);
    }
  }
// working code///
  // onFilesSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;

  //   if (input.files) {
  //     const files: File[] = Array.from(input.files);
  //     console.log('Selected files:', files);
  //     this.selectedFiles = files.map(file => new FileUpload(file));
  //   } else {
  //     console.error('No files selected');
  //   }
  // }

  // uploadFiles() {
  //   this.selectedFiles.forEach(fileUpload => {
  //     if (!fileUpload.file) {
  //       console.error('File is undefined in FileUpload object');
  //       return;
  //     }

  //     // Initialize progress for each file
  //     this.uploadProgress[fileUpload.file.name] = 0;

  //     this.storageService.pushFileToStorage(fileUpload, this.galleryId).subscribe({
  //       next: ({ progress, downloadURL }) => {
  //         // Update the progress of each file
  //         this.uploadProgress[fileUpload.file.name] = progress;
  //         console.log(`Upload progress for ${fileUpload.file.name}: ${progress}%`);
  //         if (downloadURL) {
  //           fileUpload.url = downloadURL;
  //           console.log(`File available at: ${downloadURL}`);
  //         }
  //       },
  //       error: (err) => console.error('Upload error', err),
  //       complete: () => console.log('Upload complete')
  //     });
  //   });
  // }

  loadGalleryFiles() {
    this.galleryService.getGalleryFiles(this.galleryId).subscribe(files => {
      this.existingFiles = files;
      console.log('Existing Files');
      console.log(this.existingFiles);
    });
  }
}
