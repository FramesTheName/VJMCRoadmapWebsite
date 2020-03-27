import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CertificationService } from '../core/model-services/certification.service';
import { CareerService } from '../core/model-services/career.service';
import { CareerSectorService } from '../core/model-services/career-sector.service';
import { Career } from '../core/models/career';
import { Certification } from '../core/models/certification';
import { CareerSector } from '../core/models/career-sector';
import { PreferenceData } from './career-match-page.component';
import { Skill } from '../core/models/skill';
import { SkillService } from '../core/model-services/skill.service';


export class CareerData{
  careerOne: Career;
  careerTwo: Career;
  careerThree: Career;
  sector: CareerSector;
}

@Injectable({
  providedIn: 'root'
})
export class MatchingService{
  myCareers = new CareerData();
  skills: Skill[];
  certifications: Certification[];
  careers: Career[];
  sectors: CareerSector[];


  constructor(
    private careerService: CareerService,
    private sectorService: CareerSectorService,
    private skillService: SkillService,
    private certificationService: CertificationService,
  ) { this.getCareers();
    this.getSectors();
    this.getSkills();
    this.getCerts(); }

  matchCareers(myData: PreferenceData): CareerData{
    this.myCareers.careerOne = this.careers.find(career => career.id === 1);
    this.myCareers.careerTwo = this.careers.find(career => career.id === 2);
    this.myCareers.careerThree = this.careers.find(career => career.id === 3);
    this.myCareers.sector = this.sectors.find(sector => sector.id === 1);

    return this.myCareers;
  }

  getCareers() {
    this.careerService.getCareers()
      .subscribe(careers => this.careers = careers);
  }

  getSectors() {
    this.sectorService.getSectors()
      .subscribe(sectors => this.sectors = sectors);
  }
  getCerts() {
    this.certificationService.getCertifications()
      .subscribe(certifications => this.certifications = certifications);
  }

  getSkills() {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }
}
