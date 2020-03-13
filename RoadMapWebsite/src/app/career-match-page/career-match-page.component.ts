import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-career-match-page',
  templateUrl: './career-match-page.component.html',
  styleUrls: ['./career-match-page.component.css']
})
export class CareerMatchPageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
