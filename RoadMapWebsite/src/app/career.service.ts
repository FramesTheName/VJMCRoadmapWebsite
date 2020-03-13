import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CAREERS } from './core/mock-models/mock-careers';
import { Career } from './core/models/career';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor() { }

  getCareer(id: number): Observable<Career> {
    return of(CAREERS.find(career => career.id === id));
  }

  getCareers(): Observable<Career[]> {
    return of(CAREERS);
  }
}
