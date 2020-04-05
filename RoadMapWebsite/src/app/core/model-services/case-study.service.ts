import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CaseStudy } from '../models/case-study';
import { CASESTUDIES } from '../mock-models/mock-case-studies';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {

  constructor() { }

  getCaseStudy(id: number): Observable<CaseStudy> {
    return of(CASESTUDIES.find(sector => sector.id === id));
  }

  getStudies(): Observable<CaseStudy[]> {
    return of(CASESTUDIES);
  }
}
