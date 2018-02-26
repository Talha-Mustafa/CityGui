import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthenticationguardService implements CanActivate {
user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user=afAuth.authState;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.user.map((auth)=>{
      if(!auth){
        this.router.navigateByUrl('/logion');
        return false;
      }
      return true;
    }).take(1);
  }
  }