import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { FileUpload } from 'src/app/data/models/FileUpload';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private basePath = '/uploads/';

  fileList: FileUpload[] = [];

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    fileUpload.id =this.afs.createId();
    const file = {
     name: fileUpload.name,
     key: fileUpload.key,
     url: fileUpload.url

    }
   this.afs.collection(this.basePath).add(Object.assign({}, file));
  }

  getFiles() {
     return this.afs.collection(this.basePath).snapshotChanges();
  }

  getFilesList(numberOfFiles: number): FileUpload[] {

    this.getFiles().subscribe({
      next: (res) => {
        //console.log('Next getting bookings ');
      this.fileList = res.map((file: any) =>{
        const data = file.payload.doc.data();
        data.id = file.payload.doc.id;
        //console.log(data.id);
        return data;

      })
      this.fileList.forEach(file => {
        console.log('looping get files  File Key:' + file.key + "File ID: " + file.id);
      })
      return this.fileList;
    },
    error:(err)  => {
      console.log('Error getting bookings ' + err);
      return err;
      //alert('Error getting bookings ' + err)
    },
    complete:() =>{
      //console.log('Complete getting bookings ');
    }

  })
  return this.fileList;

  }

   deleteFile(file: FileUpload){
    console.log("File Name in deleteFile : " + this.basePath +file.id )
    this.afs.doc(this.basePath +file.id).delete()
    .then(()=>{
      this.deleteFileStorage(file.name);
    }).catch((error: any) => console.log(error));



  }


  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

}
