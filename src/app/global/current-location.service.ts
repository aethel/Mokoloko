import {Injectable} from '@angular/core';

@Injectable()
export class GetCurrentLocation {
  public getLocation() {
    if ('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition(position => {
       return position;
      });
    }
  }
}
