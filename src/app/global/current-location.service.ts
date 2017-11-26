import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetCurrentLocation {
  public getLocation(): Observable<any> {
    return Observable.create(observer => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position);
            observer.complete();
          },
          error => observer.error(error)
        );
      } else {
        observer.error('Unsupported browser');
      }
    });
  }
}
