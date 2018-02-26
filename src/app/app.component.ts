import { Component } from '@angular/core';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';
import {Observable} from 'rxjs/observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   user: Observable<firebase.User>;
   
   constructor(private auth: AuthenticationService){
   this.user=auth.authUser();
   
   }
  logout()
  {
    this.auth.logout();
  }
}
