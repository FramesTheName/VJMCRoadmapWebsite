import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from '../core/model-services/user.service';
import { CareerData } from '../core/models/user';

@Component({
  selector: 'app-my-careers-page',
  templateUrl: './my-careers-page.component.html',
  styleUrls: ['./my-careers-page.component.css']
})
export class MyCareersPageComponent implements OnInit {
  myMatches: CareerData;

  constructor(
    private location: Location,
    private userService: UserService) 
    { }

  ngOnInit(): void {
    this.getMyMatches();
  }

  getMyMatches():void{
    this.myMatches = this.userService.getCareerData();
  }



  goBack(): void {
    this.location.back();
  }

}
