import {Component, OnInit} from '@angular/core';
import {GetCurrentLocation, APPCONFIG} from '../../global/index';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  public lat: number;
  public lon: number;
  public heading: any;
  public zoom: number;
  items: Observable<any[]>;
  constructor(private locationService: GetCurrentLocation, db: AngularFirestore) {
    this.items = db.collection(APPCONFIG.collection).valueChanges();
  }

  ngOnInit() {
    this.lat = APPCONFIG.defaultLat;
    this.lon = APPCONFIG.defaultLon;
    this.zoom = APPCONFIG.defaultZoom;
    this.getCurrentPosition();
  }


  private getCurrentPosition() {
    this.locationService.getLocation().subscribe(rep => {
      console.log(rep);
      this.lat = rep.coords.latitude;
      this.lon = rep.coords.longitude;
      this.heading = rep.coords.heading;
    });
     }
  }

