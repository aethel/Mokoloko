import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {GetCurrentLocation} from '../../global/index';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore, private locationService: GetCurrentLocation) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    console.log(this.locationService.getLocation().subscribe(rep => console.log(rep)));
    console.log('tt');

  }


}
