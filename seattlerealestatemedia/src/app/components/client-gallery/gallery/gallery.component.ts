import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/data/services/gallery.service';
import { Gallery } from 'src/app/data/models/gallery.model';
import { FileUpload } from 'src/app/data/models/FileUpload';


declare var google: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryId: string = '';
  galleryDetails?: Gallery;
  galleryFiles: FileUpload[] = [];

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryId = this.route.snapshot.paramMap.get('galleryId')!;
    console.log("Loading gallery with id:", this.galleryId);
    this.loadGalleryDetails();
    this.loadGalleryFiles();
  }

  loadGalleryDetails() {
    this.galleryService.getGalleryDetails(this.galleryId).subscribe(details => {
      this.galleryDetails = details;
      console.log(this.galleryDetails)
    });
  }

  loadGalleryFiles() {
    this.galleryService.getGalleryFiles(this.galleryId).subscribe(files => {
      this.galleryFiles = files;
      console.log(this.galleryFiles);
    });
  }

  initMap(): void {
    // if (this.galleryDetails?.address) {
    //   const geocoder = new google.maps.Geocoder();
    //   geocoder.geocode({ 'address': this.galleryDetails.address }, (results: any, status: any) => {
    //     if (status === 'OK') {
    //       const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    //         zoom: 15,
    //         center: results[0].geometry.location
    //       });
    //       new google.maps.Marker({
    //         map: map,
    //         position: results[0].geometry.location
    //       });
    //     } else {
    //       console.error('Geocode was not successful for the following reason: ' + status);
    //     }
    //   });
    // }
  }


}
