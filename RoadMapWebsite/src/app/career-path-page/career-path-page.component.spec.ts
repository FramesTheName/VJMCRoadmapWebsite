import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CareerPathPageComponent } from "./career-path-page.component";

describe("CareerPathPageComponent", () => {
  let component: CareerPathPageComponent;
  let fixture: ComponentFixture<CareerPathPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CareerPathPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPathPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
