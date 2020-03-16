import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Certification } from '../models/certification'
import { CERTIFICATIONS } from '../mock-models/mock-certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor() { }

  getCertification(id: number): Observable<Certification> {
    return of(CERTIFICATIONS.find(sector => sector.id === id));
  }

  getCertifications(): Observable<Certification[]> {
    return of(CERTIFICATIONS);
  }
}

