import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Skill } from '../models/skill'
import { SKILLS } from '../mock-models/mock-skill'

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  getSkill(id: number): Observable<Skill> {
    return of(SKILLS.find(sector => sector.id === id));
  }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
