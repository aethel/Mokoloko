import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {
  }

}
