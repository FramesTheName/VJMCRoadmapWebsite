import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CareerMatchPageComponent } from "./career-match-page.component";

describe("CareerMatchPageComponent", () => {
  let component: CareerMatchPageComponent;
  let fixture: ComponentFixture<CareerMatchPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CareerMatchPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
