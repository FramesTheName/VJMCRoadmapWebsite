import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareerPageComponent } from './career-page/career-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SectorPageComponent } from './sector-page/sector-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewPageComponent },
  { path: 'career/:id', component: CareerPageComponent },
  { path: 'sector/:id', component: SectorPageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
