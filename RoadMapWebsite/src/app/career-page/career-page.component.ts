import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { CareerService } from "../core/model-services/career.service";
import { Career } from "../core/models/career";

@Component({
  selector: "app-career-page",
  templateUrl: "./career-page.component.html",
  styleUrls: ["./career-page.component.scss"],
})
export class CareerPageComponent implements OnInit {
  career: Career;

  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCareer();
  }

  getCareer() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.careerService
      .getCareer(id)
      .subscribe((career) => {
        this.career = career
      });
  }

  goBack(): void {
    this.location.back();
  }
}
