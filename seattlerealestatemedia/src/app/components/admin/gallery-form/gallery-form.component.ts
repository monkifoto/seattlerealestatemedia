import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/data/services/gallery.service';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent {
  galleryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private router: Router
  ) {
    this.galleryForm = this.fb.group({
      address: ['', Validators.required],
      title: ['', Validators.required],
      reelUrl: [''],
      videoUrl: [''],
      tour3DUrl: [''],
    });
  }

  async createGallery() {
    if (this.galleryForm.valid) {
      const gallery = await this.galleryService.createGallery(this.galleryForm.value);
      this.router.navigate(['/admin/gallery-upload', gallery.id]);
    }
  }
}
