import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/data/services/image.service';
import{ GalleryImage} from '../../../data/models/galleryImage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges{

  images!: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService){}

  ngOnInit(){
    this.images = this.imageService.getImages();
  }

  ngOnChanges(): void {
    this.images = this.imageService.getImages();
  }

}
