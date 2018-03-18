import {Component, OnInit, OnDestroy} from '@angular/core';
import {GetCurrentLocation, APPCONFIG} from '../../global';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../global/auth.service';
import {Coordinates, Location} from '../../global/models'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit, OnDestroy {
  public lat: number;
  public lon: number;
  public heading: any;
  public zoom: number;
  public tagFilter: string;
  public directions = undefined;
  public travelMode: string;
  public show: boolean;
  items: Observable<any[]>;
  // TODO add location interface
  constructor(
    private locationService: GetCurrentLocation,
    private db: AngularFirestore,
    private authService: AuthService
  ) {
    this.items = db.collection(APPCONFIG.collection).valueChanges();
  }

  ngOnInit() {
    this.lat = APPCONFIG.defaultLat;
    this.lon = APPCONFIG.defaultLon;
    this.zoom = APPCONFIG.defaultZoom;
    this.travelMode = APPCONFIG.travelMode;
    this.getCurrentPosition();
  }

  private getCurrentPosition() {
    this.locationService.getLocation().subscribe(rep => {
      console.log(rep);
      this.lat = rep.coords.latitude;
      this.lon = rep.coords.longitude;
      this.heading = rep.coords.heading;
    });
    //unsubscribe
  }

  public logout() {
    this.authService.logout();
  }

  public trackByFn (index,item){
    return index;
  }

  public  getDirections (...target) {
    this.show = true;
    let [targLon, targLat] = target;
    this.directions = {
      origin: {
        lat: this.lat,
        lng: this.lon
      },
      destination: {
        lat: targLat,
        lng: targLon
      }
    }
  }

  public hideDirections() {
    this.show = false;
  }

  ngOnDestroy(){
    console.log('destroying');
  }
}
