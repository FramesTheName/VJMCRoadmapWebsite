import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Certification } from "../models/certification";
import { CERTIFICATIONS } from "../mock-models/mock-certification";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CertificationService {
  
  constructor(private http: HttpClient) {}


  getCertification(id: number): Observable<Certification> {
    return (this.getCertifications().pipe(
      map(txs => txs.find(txn => txn.id == id))
      )
    );
  }

  public getCertifications(): Observable<Certification[]> {
    const sheetno="osly2bu"
         const sheetid = "1XhjK3Enh19TIxCxgIC7mma89CMohAmpFUbJzGiPP7Fk"
         const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
        
    return this.http.get<Certification[]>(url)
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
        const myArray = <Certification[]>returnArray
        return myArray;
      })
    );
}

}
