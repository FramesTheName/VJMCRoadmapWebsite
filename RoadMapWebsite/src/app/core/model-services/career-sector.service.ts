import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SECTORS } from '../mock-models/mock-sectors'
import { CareerSector } from '../models/career-sector'

@Injectable({
  providedIn: 'root'
})
export class CareerSectorService {

  constructor() { }

  getSector(id: number): Observable<CareerSector> {
    return of(SECTORS.find(sector => sector.id === id));
  }

  getSectors(): Observable<CareerSector[]> {
    return of(SECTORS);
  }
}
