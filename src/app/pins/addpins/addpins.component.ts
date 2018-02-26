import { Component, OnInit } from '@angular/core';
import { UploadISSErvice  } from '../../services/uploadIS.service';
import { Uploadis } from '../../models/uploadis.model';
import { Pins } from '../../models/pins.model';
// import * as firebase from 'firbase';
import { PlacesirService } from '../../services/placesir.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-addpins',
  templateUrl: './addpins.component.html',
  styleUrls: ['./addpins.component.css']
})
export class AddpinsComponent implements OnInit {
upload:Uploadis;
pinModelVariable: Pins=new Pins();
public modalRef: BsModalRef; // {1}
file:FileList;
  constructor(private modalService: BsModalService, private uploadService: UploadISSErvice, private plcSir: PlacesirService) { }
uploadImage()
{
  const fileToUpload = this.file;
  this.upload=new Uploadis(fileToUpload[0]);
  this.uploadService.pushUpload(this.upload,'/pins');
}
handleFiles(event)
{
  this.file=event.target.files;
}
show()
{
  this.pinModelVariable.imageUrl=this.upload.url;
  // this.placeModelVariable.id=this.upload.$key;
  this.plcSir.pushPin(this.pinModelVariable);
}
  ngOnInit() {

  }


  public openModal(template: HTMLInputElement) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  

}
