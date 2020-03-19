import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Skill } from '../core/models/skill';
import { SkillService } from '../core/model-services/skill.service';
import { Certification } from '../core/models/certification';
import { CertificationService } from '../core/model-services/certification.service';

@Component({
  selector: 'app-career-match-page',
  templateUrl: './career-match-page.component.html',
  styleUrls: ['./career-match-page.component.css']
})
export class CareerMatchPageComponent implements OnInit {
  skills: Skill[];
  certifications: Certification[];
  selectedCertifcations: Certification[];
  model: Certification;

  constructor(
    private location: Location,
    private skillService: SkillService,
    private certificationService: CertificationService,
        ) { }

  ngOnInit() {
    this.getSkills();
    this.getCertifications();
  }

  calculateCareer(): void {

  }

  onSelect(certification: Certification): void {
    this.selectedCertifcations.push(certification);
  }

  getSkills() {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  getCertifications() {
    this.certificationService.getCertifications()
      .subscribe(certifications => this.certifications = certifications);
  }

  goBack(): void {
    this.location.back();
  }

}
