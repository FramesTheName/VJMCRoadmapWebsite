import { Career } from "./career";
import { CareerSector } from "./career-sector";

export class User {
  preferenceData: PreferenceData;
  careerData: CareerData;
}

export class PreferenceData {
  mosId: string;
  skill1: number;
  skill2: number;
  skill3: number;
  completiontime: string;
  certifications: string[];

  constructor() {
    this.mosId = "";
    this.skill1 = null;
    this.skill2 = null;
    this.skill3 = null;
    this.completiontime = "";
    this.certifications = [];
  }
}

export class CareerData {
  careerOne: Career;
  careerTwo: Career;
  careerThree: Career;
  sector: CareerSector;
  constructor() {}
}
