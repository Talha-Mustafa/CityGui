import { Routes } from '@angular/router';
import { CategoriesComponent } from './app/categories/categories.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { LogionComponent } from './app/logion/logion.component';
import { NewsArticlesComponent } from './app/news-articles/news-articles.component';
import { PinsComponent } from './app/pins/pins.component';
import { PlacesComponent } from './app/places/places.component';
import { SettingsComponent } from './app/settings/settings.component';
import { UsersComponent } from './app/users/users.component';
import { PushNotificationsComponent } from './app/push-notifications/push-notifications.component';
import { InfoComponent } from './app/info/info.component';
import { AllRatingComponent } from './app/all-rating/all-rating.component';
import { AllReviewsComponent } from './app/all-reviews/all-reviews.component';

import  { AuthenticationguardService } from './app/services/authenticationguard.service';
export const appRoutes: Routes = [
    {
        path: 'dashboard' ,
        component: DashboardComponent,
        canActivate: [AuthenticationguardService]

    },
    {
        path: 'places' ,
        component: PlacesComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'settings' ,
        component: SettingsComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'allreviews' ,
        component: AllReviewsComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'allratings' ,
        component: AllRatingComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'pins' ,
        component: PinsComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'info' ,
        component: InfoComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'logion' ,
        component: LogionComponent
    },

    {
        path: 'categories' ,
        component: CategoriesComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'newsaritcles' ,
        component: NewsArticlesComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'pushnotifications' ,
        component: PushNotificationsComponent,
        canActivate: [AuthenticationguardService]
    },
    {
        path: 'users' ,
        component: UsersComponent,
        canActivate: [AuthenticationguardService]
    },
  {
        path:'' ,
        redirectTo: '/logion',
        pathMatch: 'full'
    }  
];