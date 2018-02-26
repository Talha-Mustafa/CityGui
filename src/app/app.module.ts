import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogionComponent } from './logion/logion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlacesComponent } from './places/places.component';
import { CategoriesComponent } from './categories/categories.component';
import { PinsComponent } from './pins/pins.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AllRatingComponent } from './all-rating/all-rating.component';
import { InfoComponent } from './info/info.component';
import { UsersComponent } from './users/users.component';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { TopViewedComponent } from './dashboard/top-viewed/top-viewed.component';
import { TopSharedComponent } from './dashboard/top-shared/top-shared.component';
import { TopBookmarkedComponent } from './dashboard/top-bookmarked/top-bookmarked.component';
import { appRoutes } from '../routes';
import { PlacesShowcaseComponent } from  './places/places-showcase/places-showcase.component';
import { AddPlaceComponent } from './places/add-place/add-place.component';

import { AddpinsComponent } from './pins/addpins/addpins.component';


import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';



import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationguardService } from './services/authenticationguard.service';


import { UploadplaceService } from './services/uploadplace.service';
import { PlacesirService } from './services/placesir.service';
import { UploadISSErvice } from './services/uploadIS.service';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


 //Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

import { environment } from '../environments/environment'; 

@NgModule({
  declarations: [
    AppComponent,
    LogionComponent,
    DashboardComponent,
    PlacesComponent,
    CategoriesComponent,
    PinsComponent,
    AllReviewsComponent,
    AllRatingComponent,
    InfoComponent,
    UsersComponent,
    NewsArticlesComponent,
    PushNotificationsComponent,
    SettingsComponent,
    TopViewedComponent,
    TopSharedComponent,
    TopBookmarkedComponent,
    AddPlaceComponent,
    PlacesShowcaseComponent,
    AddpinsComponent,
    // PinsshowcaseComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  AngularFireModule.initializeApp(environment.firebase),
      // AngularFireModule.initializeApp(firebase.app),
      AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
    
   
   
    
 ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [UploadISSErvice,AuthenticationguardService,AuthenticationService,PlacesirService,UploadplaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
