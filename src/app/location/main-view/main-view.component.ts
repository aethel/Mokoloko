import { Component, OnInit } from '@angular/core';
import { GetCurrentLocation } from '../../global/index';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public lat: number;
  public lon: number;
  public heading: any;
  public zoom: number;
  constructor(
    private getLocation: GetCurrentLocation
  ) { }
  ngOnInit() {
    this.lat = 51.678418;
    this.lon = 7.809007;

    this.getCurrentPosition();

  }
  private getCurrentPosition () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.heading = position.coords.heading;
        this.zoom = 36;
        console.log(this.heading);
        console.log(this.zoom);
      });
    }
  }
}
