import {Component, OnInit, OnDestroy} from '@angular/core';
import {GetCurrentLocation, APPCONFIG} from '../../global';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../global/auth.service';
import {Coordinates, Location} from '../../global/models';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit, OnDestroy {
  private currentLat: number;
  private currentLon: number;
  public lat: number;
  public lng: number;
  public heading: any;
  public zoom: number;
  public tagFilter: string;
  public directions = undefined;
  public travelMode: string;
  public show = false;
  items: Observable<any[]>;

  constructor(
    private locationService: GetCurrentLocation,
    private db: AngularFirestore,
    private authService: AuthService
  ) {
    this.items = db.collection(APPCONFIG.collection).valueChanges();
  }

  async ngOnInit() {
    this.currentLat = APPCONFIG.defaultLat;
    this.currentLon = APPCONFIG.defaultLon;
    this.zoom = APPCONFIG.defaultZoom;
    this.travelMode = APPCONFIG.travelMode;
    this.getCurrentPosition().then(rep => {
      this.currentLat = rep.coords.latitude;
      this.currentLon = rep.coords.longitude;
      this.setLocation(this.currentLat, this.currentLon);
    });
  }

  private  getCurrentPosition(): Promise<any> {
   return this.locationService.getLocation().toPromise();
  }

  private setLocation (lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  public logout(): void {
    this.authService.logout();
  }

  public trackByFn (index, item): number {
    return index;
  }

  private toggleShow (): void {
    this.show = !this.show;
  }

  public setDirections (...target) {
    const [targetLon, targetLat] = target;
    this.directions = {
      origin: {
        lat: this.currentLat,
        lng: this.currentLon
      },
      destination: {
        lat: targetLat,
        lng: targetLon
      }
    };
    this.toggleShow();
  }

  public hideDirections() {
    this.setLocation(this.currentLat, this.currentLon);
  }

  ngOnDestroy() {
    console.log('destroying');
  }
}

interface ILocation {
  lat: number;
  lng: number;
  head?: number;
}
