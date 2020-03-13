import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SectorPageComponent } from './sector-page/sector-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerPageComponent,
    OverviewPageComponent,
    SectorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
