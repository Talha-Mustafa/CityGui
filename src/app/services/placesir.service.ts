import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule,AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { place } from '../models/places.model';
import { Pins } from '../models/pins.model';
import { UploadISSErvice } from './uploadIS.service';
import { Uploadis } from '../models/uploadis.model';
import { AddPlaceComponent } from '../places/add-place/add-place.component';
import * as firebase from 'firebase';
import {AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { AngularFirestoreModule,AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable()
export class PlacesirService {
  placeCollection: AngularFirestoreCollection<place>;
  places: Observable<place[]>;
  afs: AngularFirestore;
  item: FirebaseListObservable<place>=null;
  basePath:string='/places';
  // opo[]:place[]=new place[]();
 pio: place[] = new Array<place>();
ut:place[];
  op:AngularFireList<place[]>;
  i:number=0;
  msg: string;
// placeItems: AngularFireList<place[]>=null;
// placceItem: FirebaseObjectObservable<place>;
// pi:place[];
// private cV: AddPlaceComponent;
pd:AngularFireList<place>;
 private gettast;
snapshot:any;

private listRef = this.db.list<place>('places');
  constructor(private db: AngularFireDatabase, private af: AngularFireModule, private afss:AngularFirestore)
  {
      
  //  this.gettast=this.db.database.ref('/places');
  }
 
//   getItemsList(){
//   console.log( this.db.database.ref('/places').sn)}
  

// //  
// //  getItemsList(Iquery={}):AngularFireList<place[]> {
  
// //     return this.db.list('/place').snapshotChanges()
// //   listObservable.subscribe();
// //  }
// getItemsList():AngularFirestoreCollection<place>{
//   this.placeCollection=this.afss.collection('/places',ref=>{
//     return ref.orderBy('key');

//   });
//   this.places=this.placeCollection.valueChanges();
//   this.snapshot=this.placeCollection.snapshotChanges().map
//   (arr=>{
//     console.log(arr);
//     console.log("ddd");
//     return arr.map(snap=> snap.payload.doc.data())
//   })
//   return this.placeCollection;
// }
// key:string;     
pushItem(item: place)      {
      
   this.db.list('/places').push(item);    
    // this.key = this.db.list('/places').push("").key;  
    // console.log(this.key);  
    //  item.id=this.key;
    //  this.db.object('/places/'+this.key).set(item);
     

    
    //   //  this.db.list('/places').push(item.id=key);
     }
    // key1:string;     
 
 
    pushPin(item:Pins){
    //    this.key1 = this.db.list('/pins').push("").key;  
    // console.log(this.key1);  
    //  item.id=this.key1;
    //  this.db.object('/pins/'+this.key1).set(item);
    this.db.list('/pins').push(item);  
    }
    pushUser(item:User):Boolean{
      if(item.password===item.confirmPassword)
        {
          this.db.list('/users').push(item);
          return false;
       }
        else{return false;}
      }

 getItems(){

//   this.db.list('/places').valueChanges().forEach(i=>{i.forEach(element => {
//      console.log(element);
//   });});
return this.listRef;
}


}