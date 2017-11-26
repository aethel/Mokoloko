import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { MainViewComponent } from './location/main-view/main-view.component';
import { AgmCoreModule } from '@agm/core';
import { GetCurrentLocation } from './global';


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
    })
  ],
  providers: [GetCurrentLocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
