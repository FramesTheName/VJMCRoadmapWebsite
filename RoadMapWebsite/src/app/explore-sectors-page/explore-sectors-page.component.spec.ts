import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSectorsPageComponent } from './explore-sectors-page.component';

describe('ExploreSectorsPageComponent', () => {
  let component: ExploreSectorsPageComponent;
  let fixture: ComponentFixture<ExploreSectorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreSectorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSectorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
