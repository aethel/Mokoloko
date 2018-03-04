import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {GetCurrentLocation, APPCONFIG, Location} from '../../global/index';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  items: Observable<any[]>;
  public locationForm: FormGroup;
  public latitude: FormControl;
  public longitude: FormControl;
  public name: FormControl;
  public tags: FormControl;
  public address: FormControl;
  public description: FormControl;
  private currentCoords: any;

  constructor(
    private db: AngularFirestore,
    private locationService: GetCurrentLocation,
    private router: Router
  ) {
    this.items = db.collection(APPCONFIG.collection).valueChanges();
  }

  ngOnInit() {
    this.getCurrentCoords();
    this.latitude = new FormControl('', Validators.required);
    this.longitude = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.tags = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);

    this.locationForm = new FormGroup({
      latitude: this.latitude,
      longitude: this.longitude,
      name: this.name,
      address: this.address,
      description: this.description,
      tags: this.tags,
    });
  }

  public saveLocation(values) {
    console.log(values);
    if (this.locationForm.valid) {
      console.log(values, this.locationForm.valid);
      const place = this.locationForm.controls['name'].value;
      console.log(this.db.collection);
      this.db
        .collection(APPCONFIG.collection)
        .doc(place)
        .set(values)
        .then(result => console.log('saved successfully'))
        .catch(error => console.log(error));

        this.router.navigate(['mainView']);
    } else {
      console.log(this.locationForm.errors);
    }
  }
  // TODO use native map object to reverse geocode coords into address
  private getCurrentCoords() {
    this.locationService.getLocation().subscribe(res => {
      this.locationForm.controls['latitude'].setValue(res.coords.latitude);
      this.locationForm.controls['longitude'].setValue(res.coords.longitude);
    });
  }
}
