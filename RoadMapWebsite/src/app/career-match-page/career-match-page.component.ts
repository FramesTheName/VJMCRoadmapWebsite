import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import  {MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { Skill } from '../core/models/skill';
import { SkillService } from '../core/model-services/skill.service';
import { Certification } from '../core/models/certification';
import { CertificationService } from '../core/model-services/certification.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatchingService, CareerData } from './matching.service';


export interface certification {
  name: string;
}

export class PreferenceData {
    mosId: string;
    skill1: number;
    skill2: number;
    skill3: number;
    completiontime: string;
    certifications: string[];
}

@Component({
  selector: 'app-career-match-page',
  templateUrl: './career-match-page.component.html',
  styleUrls: ['./career-match-page.component.scss']
})
export class CareerMatchPageComponent implements OnInit {
  skills: Skill[];
  certifications: Certification[];
  userForm = this.fb.group({
    MOSNumber: [''],
    desiredCompletion: [''], //Validators.required
    firstSkill: [''],
    secondSkill: [''],
    thirdSkill: [''],
  });
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  certCtrl = new FormControl();
  filteredCertifications: Observable<string[]>;
  myCertifications: string[] = [];
  allCertifications: string[] = [];
  user = new PreferenceData();
  data: CareerData;

  constructor(
    private location: Location,
    private skillService: SkillService,
    private fb: FormBuilder,
    private certificationService: CertificationService,
    public dialog: MatDialog,
    private matchingService: MatchingService,
        ) { 
          this.filteredCertifications = this.certCtrl.valueChanges.pipe(
            startWith(null),
            map((certification: string | null) => certification ? this._filter(certification) : this.allCertifications.slice()));
        }

  ngOnInit() {
    this.getSkills();
    this.getCerts();
  }
  
  @ViewChild('certificationInput') certificationInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our certification
    if ((value || '').trim()) {
      this.myCertifications.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.certCtrl.setValue(null);
  }

  remove(certification: string): void {
    const index = this.myCertifications.indexOf(certification);

    if (index >= 0) {
      this.myCertifications.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.myCertifications.push(event.option.viewValue);
    this.certificationInput.nativeElement.value = '';
    this.certCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCertifications.filter(certification => certification.toLowerCase().indexOf(filterValue) === 0);
  }

  getmyCertifications(){
    
  }

  getCerts() {
    this.certificationService.getCertifications()
      .subscribe(certifications => this.certifications = certifications);
    this.allCertifications = this.certifications.map((a => a.name));
  }

  getSkills() {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void{
    this.user.certifications == this.myCertifications;
    this.user.skill1 == this.userForm.controls.firstSkill.value;
    this.user.skill2 == this.userForm.controls.secondSkill.value;
    this.user.skill3 == this.userForm.controls.thirdSkill.value;
    //this.user.mosId == this.userForm.controls.mosId.value.toString;
    //this.user.completiontime == this.userForm.controls.completiontime.value;
    
  }

  calculateCareer(): void{
    this.onSubmit();
    this.data = this.matchingService.matchCareers(this.user);
    const dialogRef = this.dialog.open(CareerPopup, {
      width: '75%',
      data: this.data,
    });
  }

}

@Component({
  selector: 'career-popup',
  templateUrl: 'career-match-popup.html',
  styleUrls: ['./career-match-popup.component.scss']
})
export class CareerPopup {

  constructor(
    public dialogRef: MatDialogRef<CareerPopup>,
    @Inject(MAT_DIALOG_DATA) public data: CareerData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  redirect(id:number): void {
    this.dialogRef.close();
  }

}
