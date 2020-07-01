import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PhasePopupComponent } from "./phase-popup.component";

describe("PhasePopupComponent", () => {
  let component: PhasePopupComponent;
  let fixture: ComponentFixture<PhasePopupComponent>;

  beforeEach(async(() => {
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
