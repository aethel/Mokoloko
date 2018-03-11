import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './routes';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { MainViewComponent } from './location/main-view/main-view.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GetCurrentLocation, FilterPipe, AuthService } from './global';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './location/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLocationComponent,
    MainViewComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoSccnNizGj_3_lCnvcy8jR2_-8BHlTdM'
    }),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'nearme-huzzah'),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AgmDirectionModule
  ],
  providers: [GetCurrentLocation, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
