import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { CareerSectorService } from "../core/model-services/career-sector.service";
import { CareerSector } from "../core/models/career-sector";

@Component({
  selector: "app-explore-sectors-page",
  templateUrl: "./explore-sectors-page.component.html",
  styleUrls: ["./explore-sectors-page.component.scss"],
})
export class ExploreSectorsPageComponent implements OnInit {
  sectors: CareerSector[];
  constructor(
    private sectorService: CareerSectorService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSectors();
  }

  getSectors() {
    this.sectorService
      .getSectors()
      .subscribe((sectors) => (this.sectors = sectors));
  }

  goBack(): void {
    this.location.back();
  }
}
