import { Injectable } from "@angular/core";

import { User, PreferenceData, CareerData } from "../models/user";
import { Skill } from "../models/skill";
import { Career } from "../models/career";
import { CareerSector } from "../models/career-sector";
import { Certification } from "../models/certification";
import { SkillService } from "./skill.service";
import { CareerSectorService } from "./career-sector.service";
import { CareerService } from "./career.service";
import { CertificationService } from "./certification.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  myUser: User;
  myCareers = new CareerData();
  skills: Skill[];
  certifications: Certification[];
  careers: any[];
  sectors: any[];

  constructor(
    private careerService: CareerService,
    private sectorService: CareerSectorService,
    private skillService: SkillService,
    private certificationService: CertificationService
  ) {
    this.getCareers();
    this.getSectors();
    this.getSkills();
    this.getCerts();
    this.myUser = new User();
    this.myUser.preferenceData = new PreferenceData();
    this.myUser.careerData = new CareerData();
  }

  matchCareers(myData: PreferenceData): CareerData {
    this.careerService.getCareer(16)
    .subscribe(career =>{
      this.myCareers.careerOne = career
    });
    this.careerService.getCareer(2)
    .subscribe(career =>{
      this.myCareers.careerTwo = career
    });
    this.careerService.getCareer(17)
    .subscribe(career =>{
      this.myCareers.careerThree = career
    });
    console.log(this.myCareers)
    this.sectorService.getSector(1)
    .subscribe(sector =>{
      this.myCareers.sector = sector
    });
    this.setPreferenceData(myData);
    this.setCareerData(this.myCareers);

    return this.myCareers;
  }


  getCareers() {
    this.careerService
      .getCareers()
      .subscribe((careers) => {
        this.careers = careers
      });
  }

  getSectors() {
    this.sectorService
      .getSectors()
      .subscribe((sectors) => (this.sectors = sectors));
  }
  getCerts() {
    this.certificationService
      .getCertifications()
      .subscribe((certifications) => (this.certifications = certifications));
  }

  getSkills() {
    this.skillService.getSkills().subscribe((skills) => (this.skills = skills));
  }

  getPreferenceData(): PreferenceData {
    return this.myUser.preferenceData;
  }
  getCareerData(): CareerData {
    return this.myUser.careerData;
  }

  setPreferenceData(data: PreferenceData) {
    this.myUser.preferenceData = data;
  }

  setCareerData(data: CareerData) {
    this.myUser.careerData = data;
  }
}
