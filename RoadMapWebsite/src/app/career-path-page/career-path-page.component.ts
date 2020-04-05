import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CareerService } from '../core/model-services/career.service';
import { Career } from '../core/models/career';
import { CaseStudyPopupComponent } from './case-study-popup/case-study-popup.component';
import { CaseStudyService } from '../core/model-services/case-study.service';
import { CaseStudy } from '../core/models/case-study';


@Component({
  selector: 'app-career-path-page',
  templateUrl: './career-path-page.component.html',
  styleUrls: ['./career-path-page.component.css']
})
export class CareerPathPageComponent implements OnInit {
  career: Career;
  studies: CaseStudy[];

  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService,
    private location: Location,
    private studyService: CaseStudyService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getCareer();
    this.getStudies();
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


