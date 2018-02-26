import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Uploadis } from '../models/uploadis.model';


// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';
@Injectable()
export class UploadISSErvice {
 constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase){}


// private basePath: string = '/uploads';
private uploadTask: firebase.storage.UploadTask;
private baseP:string;
pushUpload(upload: Uploadis,basePath:string){
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${basePath+"/"}${upload.file.name}`).put(upload.file);
this.baseP=basePath;
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot)=> {
        //upload is progress
        upload.progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes)* 100;
    },
    //error observer
    (error) => {
    console.log(error);
    },
//success observer
    ():any => {
        upload.url=this.uploadTask.snapshot.downloadURL;
        upload.name=upload.file.name;
        this.saveFileData(upload);
        
    });
    }

    private saveFileData(upload: Uploadis){
        this.db.list('/uploads').push(upload);
        console.log("done");

    }

}