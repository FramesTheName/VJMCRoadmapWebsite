import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CareerSectorService } from '../core/model-services/career-sector.service';
import { CareerService } from '../core/model-services/career.service';
import { CareerSector } from '../core/models/career-sector';
import { Career } from '../core/models/career';

@Component({
  selector: 'app-sector-page',
  templateUrl: './sector-page.component.html',
  styleUrls: ['./sector-page.component.scss']
})
export class SectorPageComponent implements OnInit {
  sector: CareerSector;
  careers: Career[];

  constructor(
    private route: ActivatedRoute,
    private careerSectorService: CareerSectorService,
    private careerService: CareerService,
    private location: Location) { }

  ngOnInit() {
    this.getCareer();
    this.getCareers();
  }

  getCareer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.careerSectorService.getSector(id)
      .subscribe(career => this.sector = career);
  }
  getCareers() {
    this.careerService.getCareers()
      .subscribe(careers => this.careers = careers);
  }

  goBack(): void {
    this.location.back();
  }

}
