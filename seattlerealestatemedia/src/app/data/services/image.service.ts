import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FirebaseApp } from '@angular/fire/app';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage';
// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.uid = '';
      this.afAuth.authState.subscribe(auth=>{
        if(auth !== undefined && auth !==null) {
          this.uid = auth.uid;
        }
      });

   }

   getImages() : Observable<any[]>{
    return this.db.list('uploads').valueChanges();
   }
}
