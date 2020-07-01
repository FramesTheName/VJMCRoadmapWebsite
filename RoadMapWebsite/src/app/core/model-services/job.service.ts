import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Job } from "../models/job";
import { JOBS } from "../mock-models/mock-job";

@Injectable({
  providedIn: "root",
})
export class JobService {
  getJob(id: number): Observable<Job> {
    return of(JOBS.find((sector) => sector.id === id));
  }

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }
}
