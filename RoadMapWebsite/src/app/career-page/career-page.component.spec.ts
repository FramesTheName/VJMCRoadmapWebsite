import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CareerPageComponent } from "./career-page.component";

describe("CareerPageComponent", () => {
  let component: CareerPageComponent;
  let fixture: ComponentFixture<CareerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CareerPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
