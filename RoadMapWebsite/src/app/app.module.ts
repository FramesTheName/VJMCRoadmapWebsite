import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SectorPageComponent } from './sector-page/sector-page.component';
import { CareerMatchPageComponent } from './career-match-page/career-match-page.component';
import { ExploreSectorsPageComponent } from './explore-sectors-page/explore-sectors-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerPageComponent,
    OverviewPageComponent,
    SectorPageComponent,
    CareerMatchPageComponent,
    ExploreSectorsPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
