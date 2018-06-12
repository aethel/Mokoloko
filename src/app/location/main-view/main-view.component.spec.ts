import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewComponent ]
    })
    .compileComponents();
  }));

  const initialDirections = {
    origin: {
      lat: 1,
      lng: 2
    },
    destination: {
      lat: 3,
      lng: 4
    }
  };

  const newDirections = {
    origin: {
      lat: 1,
      lng: 2
    },
    destination: {
      lat: 5,
      lng: 6
    }
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set navigation directions', () => {
    expect(component.setDirections(5, 6)).toEqual(newDirections);

  });

  it('should centre map and zoom in to default level', () => {
  });
});
