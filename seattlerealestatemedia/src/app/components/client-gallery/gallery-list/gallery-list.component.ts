import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, forkJoin, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface Gallery {
  id: string;
  title: string;
  thumbnailUrl: string;
}


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  galleries: Gallery[] = [];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loadGalleries();
  }
  loadGalleries() {
    this.firestore.collection('client-galleries').snapshotChanges().pipe(
      switchMap(actions => {
        const galleryObservables = actions.map(action => {
          const data = action.payload.doc.data() as any;
          const id = action.payload.doc.id;
          const title = data.title;

          const ref = this.storage.ref(`uploads/galleries/${id}`);
          return ref.listAll().pipe(
            switchMap(result => {
              if (result.items.length > 0) {
                const firstItem = result.items[0];
                return from(firstItem.getDownloadURL()).pipe(
                  map(url => ({
                    id,
                    title,
                    thumbnailUrl: url
                  })),
                  catchError(() => {
                    return new Observable<Gallery>(observer => {
                      observer.next({ id, title, thumbnailUrl: 'default-thumbnail-url.jpg' });
                      observer.complete();
                    });
                  })
                );
              } else {
                return new Observable<Gallery>(observer => {
                  observer.next({ id, title, thumbnailUrl: 'default-thumbnail-url.jpg' });
                  observer.complete();
                });
              }
            })
          );
        });
        return forkJoin(galleryObservables);
      })
    ).subscribe({
      next: galleries => {
        this.galleries = galleries;
      },
      error: (error) => {
        console.error('Error loading galleries:', error);
      }
    });
  }
  // loadGalleries() {
  //   this.firestore.collection('client-galleries').snapshotChanges().pipe(
  //     switchMap(actions => {
  //       const galleryObservables = actions.map(action => {
  //         const data = action.payload.doc.data() as any;
  //         const id = action.payload.doc.id;
  //         const title = data.title;
  //         const images = data.images;
  //         console.log(images);
  //         if (images && images.length > 0) {
  //           const firstImage = images[0];
  //           const filePath = `uploads/galleries/${id}/${firstImage}`;
  //           const storageRef = this.storage.ref(filePath);
  //           return storageRef.getDownloadURL().pipe(
  //             map(url => ({
  //               id,
  //               title,
  //               thumbnailUrl: url
  //             }))
  //           );
  //         } else {
  //           return new Observable<Gallery>(observer => {
  //             observer.next({ id, title, thumbnailUrl: '../../../../assets/default-thumbnail.png' });
  //             observer.complete();
  //           });
  //         }
  //       });
  //       return forkJoin(galleryObservables);
  //     })
  //   ).subscribe({
  //     next: galleries => {
  //       this.galleries = galleries;
  //     },
  //     error: (error) => {
  //       console.error('Error loading galleries:', error);
  //     }
  //   });
  // }

  navigateToGallery(galleryId: string) {
    this.router.navigate(['/gallery', galleryId]);
  }
}
