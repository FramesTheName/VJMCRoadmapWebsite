import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CareerService } from '../core/model-services/career.service';
import { Career } from '../core/models/career';
import { CaseStudyPopupComponent } from './case-study-popup/case-study-popup.component';
import { CaseStudyService } from '../core/model-services/case-study.service';
import { CaseStudy } from '../core/models/case-study';
import { Certification } from '../core/models/certification';
import { CertificationService } from '../core/model-services/certification.service';


@Component({
  selector: 'app-career-path-page',
  templateUrl: './career-path-page.component.html',
  styleUrls: ['./career-path-page.component.css']
})
export class CareerPathPageComponent implements OnInit {
  career: Career;
  studies: CaseStudy[];
  entryCerts = new Array<Certification>();
  beginCerts = new Array<Certification>();
  medCerts = new Array<Certification>();
  advCerts = new Array<Certification>();

  allCerts: Certification[];

  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService,
    private location: Location,
    private studyService: CaseStudyService,
    private certService: CertificationService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getCareer();
    this.getStudies();
    this.getCertificaitons();
    this.getCareerCerts();
  }

  getStudies() {
    this.studyService.getStudies()
      .subscribe(studies => this.studies = studies);
  }

  getCareer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.careerService.getCareer(id)
      .subscribe(career => this.career = career);
  }

  getCertificaitons(){
    this.certService.getCertifications()
      .subscribe(certs => this.allCerts = certs);
  }

  getCareerCerts(){
    for (var cert of this.career.certValue){
      var certID = cert[0];
      var certVal = cert[1];
      var certifcation = this.allCerts.find(certificate => certificate.id === certID)
      if(certVal == 4){
        this.beginCerts.push(certifcation);
      }else if(certVal <= 2){
        this.advCerts.push(certifcation);
      }else if(certVal == 3){
        this.medCerts.push(certifcation);
      }else{
        this.entryCerts.push(certifcation);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CaseStudyPopupComponent, {
      width: '100%',
      data: this.studies
    });
  }




}


