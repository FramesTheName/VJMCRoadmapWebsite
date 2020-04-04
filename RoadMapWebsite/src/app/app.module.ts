import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SectorPageComponent } from './sector-page/sector-page.component';
import { CareerMatchPageComponent } from './career-match-page/career-match-page.component';
import { ExploreSectorsPageComponent } from './explore-sectors-page/explore-sectors-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoadmapPageComponent } from './roadmap-page/roadmap-page.component';
import { CareerPathPageComponent } from './career-path-page/career-path-page.component';
import { MyCareersPageComponent } from './my-careers-page/my-careers-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CareerPageComponent,
    OverviewPageComponent,
    SectorPageComponent,
    CareerMatchPageComponent,
    ExploreSectorsPageComponent,
    RoadmapPageComponent,
    CareerPathPageComponent,
    MyCareersPageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
