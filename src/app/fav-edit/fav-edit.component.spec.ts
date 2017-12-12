import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavEditComponent } from './fav-edit.component';

describe('FavEditComponent', () => {
  let component: FavEditComponent;
  let fixture: ComponentFixture<FavEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
