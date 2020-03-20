import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Skill } from '../core/models/skill';
import { SkillService } from '../core/model-services/skill.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-career-match-page',
  templateUrl: './career-match-page.component.html',
  styleUrls: ['./career-match-page.component.css']
})
export class CareerMatchPageComponent implements OnInit {
  skills: Skill[];
  userForm = this.fb.group({
    MOSNumber: [''],
    firstSkill: ['', Validators.required],
    secondSkill: ['', Validators.required],
    thirdSkill: ['', Validators.required],
  });

  constructor(
    private location: Location,
    private skillService: SkillService,
    private fb: FormBuilder
        ) { }

  ngOnInit() {
    this.getSkills();
    this.buildForms
  }

  buildForms(){

  }

  getSkills() {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }

}
