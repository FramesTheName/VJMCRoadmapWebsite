import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCareersPageComponent } from './my-careers-page.component';

describe('MyCareersPageComponent', () => {
  let component: MyCareersPageComponent;
  let fixture: ComponentFixture<MyCareersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCareersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCareersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
