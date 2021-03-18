import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { CaseStudy } from "../models/case-study";
import { CASESTUDIES } from "../mock-models/mock-case-studies";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CaseStudyService {
  
  constructor(private http: HttpClient) {}

  getCaseStudy(id: number): Observable<CaseStudy> {
    return (this.getStudies().pipe(
      map(txs => txs.find(txn => txn.id == id))
      )
    );
  }

  public getStudies(): Observable<CaseStudy[]> {
    const sheetno="ov8r2f6"
         const sheetid = "1XhjK3Enh19TIxCxgIC7mma89CMohAmpFUbJzGiPP7Fk"
         const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
        
    return this.http.get<CaseStudy[]>(url)
    .pipe(
      map((sectors: any) => {
        const data = sectors.feed.entry;
                
        const returnArray: Array<any> = [];
        if (data && data.length > 0) {
          data.forEach(entry => {
            const obj = {};
            for (const x in entry) {
              if (x.includes('gsx$') && entry[x].$t && entry[x].$t.startsWith('[')) {
                obj[x.split('$')[1]] = JSON.parse(entry[x]['$t']);
              }else if (x.includes('gsx$') && entry[x].$t) {
                obj[x.split('$')[1]] = entry[x]['$t'];
              }
            }
            returnArray.push(obj);
          });
        }
        const myArray = <CaseStudy[]>returnArray
        return myArray;
      })
    );
}
}
