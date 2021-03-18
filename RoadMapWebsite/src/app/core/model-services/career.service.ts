import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { CAREERS } from "../mock-models/mock-careers";
import { Career } from "../models/career";

@Injectable({
  providedIn: "root",
})
export class CareerService {

  constructor(private http: HttpClient) {}

  getCareer(id: number): Observable<Career> {
    //return of(CAREERS.find((career) => career.id === id))
    return (this.getCareers().pipe(
      map(txs => txs.find(txn => txn.id == id))
      )
    );
  }

  public getCareers(): Observable<Career[]> {
    const sheetno="od6"
         const sheetid = "1XhjK3Enh19TIxCxgIC7mma89CMohAmpFUbJzGiPP7Fk"
         const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
        
    return this.http.get<Career[]>(url)
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
        const myArray = <Career[]>returnArray
        return myArray;
      })
    );
}

  
}
