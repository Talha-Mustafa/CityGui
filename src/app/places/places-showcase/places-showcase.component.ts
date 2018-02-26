import { Component, OnInit, OnChanges } from '@angular/core';
import { PlacesirService } from '../../services/placesir.service';
import { Observable } from 'rxjs/observable';
import { place } from '../../models/places.model';
import { Uploadis } from '../../models/uploadis.model';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule,AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import {AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { AngularFirestoreModule,AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-places-showcase',
  templateUrl: './places-showcase.component.html',
  styleUrls: ['./places-showcase.component.css']
})

export class PlacesShowcaseComponent implements OnInit {
// places:AngularFireList<place>; 
pl:FirebaseObjectObservable<place>;
upload: Uploadis;
 places:AngularFireList<place[]>;
 itemList$:Observable<place[]>;
pu: place[]=new Array<place>();
  constructor(private plcSer: PlacesirService,private db: AngularFireDatabase) {
    this.itemList$=this.plcSer.getItems().snapshotChanges()
    .map(
      changes => {
        return changes.map( c =>({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    );
   }

  ngOnInit() {
 this.plcSer.getItems();

  }
  




}
