import { TestBed } from "@angular/core/testing";

import { CareerSectorService } from "./career-sector.service";

describe("CareerSectorService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CareerSectorService = TestBed.get(CareerSectorService);
    expect(service).toBeTruthy();
  });
});
