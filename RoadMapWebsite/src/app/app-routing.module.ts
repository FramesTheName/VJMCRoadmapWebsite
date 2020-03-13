import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareerPageComponent } from './career-page/career-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SectorPageComponent } from './sector-page/sector-page.component';
import { CareerMatchPageComponent } from './career-match-page/career-match-page.component';
import { ExploreSectorsPageComponent} from './explore-sectors-page/explore-sectors-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewPageComponent },
  { path: 'career/:id', component: CareerPageComponent },
  { path: 'sectors/:id', component: SectorPageComponent},
  { path: 'matching', component: CareerMatchPageComponent},
  { path: 'sectors', component: ExploreSectorsPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
