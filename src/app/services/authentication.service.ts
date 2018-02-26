import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';
import {Output, Input, OnChanges} from '@angular/core';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
@Injectable()
export class AuthenticationService {
 public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user=afAuth.authState;
  
  }

login(user: User)
{
  return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
}
logout()
{
    

  return this.afAuth.auth.signOut();

}
authUser()
{
  return this.user;
}
}
