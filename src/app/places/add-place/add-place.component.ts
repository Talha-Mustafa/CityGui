import { Component, OnInit } from '@angular/core';
import { UploadISSErvice } from '../../services/uploadIS.service';
import { Uploadis } from '../../models/uploadis.model';
import { place } from '../../models/places.model';
import { PlacesirService } from '../../services/placesir.service';
import * as _ from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers:[UploadISSErvice]
})
export class AddPlaceComponent implements OnInit {
file:FileList;
upload:Uploadis;
upPro
placeModelVariable: place=new place();
p?:place;
public modalRef: BsModalRef; // {1}

  constructor(private modalService: BsModalService, private uploadService:UploadISSErvice,private placeSer: PlacesirService) {
  
   }
show()
{
  this.placeModelVariable.imageUrl=this.upload.url;
  // this.placeModelVariable.id=this.upload.$key;
  // this.placeModelVariable.id=this.upload.$key;
  this.placeSer.pushItem(this.placeModelVariable);
}

  ngOnInit() {
  }

uploadFiles(){
const fileToUpload=this.file;
this.upload= new Uploadis(fileToUpload[0]);
this.uploadService.pushUpload(this.upload,"/uploads");
}

handleFiles(event)
{
  this.file=event.target.files;
}




  public openModal(template: HTMLInputElement) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  

}
