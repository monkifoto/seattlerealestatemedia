import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { forkJoin, from, Observable } from 'rxjs';
import { FileUpload } from 'src/app/data/models/FileUpload';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryStorageService {
  private basePath = '/uploads/galleries';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

  pushFileToStorage(fileUpload: FileUpload, galleryId: string): Observable<{ progress: number, downloadURL?: string }> {
    if (!fileUpload.file) {
      throw new Error('File is undefined in FileUpload object');
    }

    const filePath = `${this.basePath}/${galleryId}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file); // Use fileUpload.file here

    return new Observable<{ progress: number, downloadURL?: string }>((observer) => {
      uploadTask.percentageChanges().subscribe(progress => {
        observer.next({ progress: progress ?? 0 });
      });

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            observer.next({ progress: 100, downloadURL });
            observer.complete();
          });
        })
      ).subscribe();
    });
  }

  getFilesFromGallery(galleryId: string): Observable<FileUpload[]> {
    const galleryPath = `${this.basePath}/${galleryId}`;
    console.log("Fetch Gallery Path", galleryPath);
    return this.afs.collection(galleryPath).snapshotChanges().pipe(
      map(actions => {
        console.log(actions);
        return actions.map(a => {
          const data = a.payload.doc.data() as FileUpload;
          data.id = a.payload.doc.id;
          return data;
        });
      })
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

  saveFileData(metadata: { url: string, name: string, id: string }, galleryId: string): void {
    this.afs.collection(`galleries/${galleryId}/files`).add(metadata);
  }

  getFiles(galleryId: string): Observable<any[]> {
    return this.afs.collection(`galleries/${galleryId}/files`).snapshotChanges();
  }

  deleteFile(file: { url: string, name: string, id: string }, galleryId: string): Promise<void> {
    return this.afs.doc(`galleries/${galleryId}/files/${file.id}`).delete().then(() => {
      this.deleteFileStorage(file.name, galleryId);
    }).catch((error: any) => console.log(error));
  }

  private deleteFileStorage(name: string, galleryId: string): void {
    const storageRef = this.storage.ref(`${this.basePath}/${galleryId}`);
    storageRef.child(name).delete();
  }
}
