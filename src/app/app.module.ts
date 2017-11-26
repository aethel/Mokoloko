import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { MainViewComponent } from './location/main-view/main-view.component';
import { AgmCoreModule } from '@agm/core';
import { GetCurrentLocation } from './global';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddLocationComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoSccnNizGj_3_lCnvcy8jR2_-8BHlTdM'
    }),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'nearme-huzzah'),
    AngularFireAuthModule
  ],
  providers: [GetCurrentLocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
