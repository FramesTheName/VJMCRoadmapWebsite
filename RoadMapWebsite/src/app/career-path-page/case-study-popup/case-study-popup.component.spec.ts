import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CaseStudyPopupComponent } from "./case-study-popup.component";

describe("CaseStudyPopupComponent", () => {
  let component: CaseStudyPopupComponent;
  let fixture: ComponentFixture<CaseStudyPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyPopupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
