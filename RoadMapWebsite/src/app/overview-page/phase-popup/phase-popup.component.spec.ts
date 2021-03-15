import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { PhasePopupComponent } from "./phase-popup.component";

describe("PhasePopupComponent", () => {
  let component: PhasePopupComponent;
  let fixture: ComponentFixture<PhasePopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PhasePopupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
