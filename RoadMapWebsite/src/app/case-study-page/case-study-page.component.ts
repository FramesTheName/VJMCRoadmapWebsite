import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { CaseStudyService } from '../core/model-services/case-study.service';
import { CaseStudy } from '../core/models/case-study';


@Component({
  selector: 'app-case-study-page',
  templateUrl: './case-study-page.component.html',
  styleUrls: ['./case-study-page.component.css']
})
export class CaseStudyPageComponent implements OnInit {
  study: CaseStudy;
  safeSrc: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private studyService: CaseStudyService,
    private location: Location,
    private sanitizer: DomSanitizer)
     { }

     ngOnInit() {
      this.getStudy();
    }
  
    getStudy() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.studyService.getCaseStudy(id)
        .subscribe(study => this.study = study);
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.study.video);
    }

  goBack(): void {
    this.location.back();
  }

}
