import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { PlacesirService } from '../services/placesir.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:User;
msg:string;
public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService, private placeService: PlacesirService) { }

  ngOnInit() {
   
  }

  signUp(){
   const c =     this.placeService.pushUser(this.user);
   if(c==true){this.msg="Sorry Password's Not Match!"}
  }

   public openModal(template: HTMLInputElement) {
    this.modalRef = this.modalService.show(template); // {3}
  }

}
