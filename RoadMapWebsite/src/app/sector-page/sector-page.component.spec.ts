import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { SectorPageComponent } from "./sector-page.component";

describe("SectorPageComponent", () => {
  let component: SectorPageComponent;
  let fixture: ComponentFixture<SectorPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectorPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
