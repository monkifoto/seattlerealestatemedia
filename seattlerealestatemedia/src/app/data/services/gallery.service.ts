import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, switchMap, map, filter, from, forkJoin } from 'rxjs';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  getGalleryDetails(galleryId: string): Observable<Gallery> {
    return this.firestore.doc<Gallery>(`client-galleries/${galleryId}`).valueChanges().pipe(
      filter((details): details is Gallery => details !== undefined)
    );
  }

  getGalleryFiles(galleryId: string): Observable<any[]> {
    const ref = this.storage.ref(`uploads/galleries/${galleryId}`);
    return from(ref.listAll()).pipe(
      switchMap(result => {
        const fileData$ = result.items.map(itemRef => {
          return forkJoin({
            meta: from(itemRef.getMetadata()),
            url: from(itemRef.getDownloadURL())
          }).pipe(
            map(({ meta, url }) => ({
              name: meta.name,
              size: meta.size,
              url: url
            }))
          );
        });
        return forkJoin(fileData$);
      })
    );
  }
  createGallery(gal: Gallery): Promise<any> {
    gal.date_created = new Date().toISOString();
    return this.firestore.collection('client-galleries').add(gal);
  }

  getGallery(id: string): Observable<any> {
    return this.firestore.collection('client-galleries').doc(id).valueChanges();
  }

  updateGallery(id: string, data: any): Promise<void> {
    return this.firestore.collection('client-galleries').doc(id).update(data);
  }

  deleteGallery(id: string): Promise<void> {
    return this.firestore.collection('client-galleries').doc(id).delete();
  }
}
