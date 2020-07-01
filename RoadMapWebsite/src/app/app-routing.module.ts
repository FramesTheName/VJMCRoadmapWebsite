import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CareerPageComponent } from "./career-page/career-page.component";
import { OverviewPageComponent } from "./overview-page/overview-page.component";
import { SectorPageComponent } from "./sector-page/sector-page.component";
import { CareerMatchPageComponent } from "./career-match-page/career-match-page.component";
import { ExploreSectorsPageComponent } from "./explore-sectors-page/explore-sectors-page.component";
import { RoadmapPageComponent } from "./roadmap-page/roadmap-page.component";
import { CareerPathPageComponent } from "./career-path-page/career-path-page.component";
import { MyCareersPageComponent } from "./my-careers-page/my-careers-page.component";
import { CaseStudyPageComponent } from "./case-study-page/case-study-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/Overview", pathMatch: "full" },
  { path: "Overview", component: OverviewPageComponent },
  { path: "Career/:id", component: CareerPageComponent },
  { path: "CareerPath/:id", component: CareerPathPageComponent },
  { path: "Sectors/:id", component: SectorPageComponent },
  { path: "Matching", component: CareerMatchPageComponent },
  { path: "Sectors", component: ExploreSectorsPageComponent },
  { path: "Roadmap", component: RoadmapPageComponent },
  { path: "MyCareers", component: MyCareersPageComponent },
  { path: "CaseStudy/:id", component: CaseStudyPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
