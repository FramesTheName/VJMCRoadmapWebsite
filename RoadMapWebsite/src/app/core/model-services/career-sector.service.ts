import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { CAREERS } from "../mock-models/mock-careers";

import { SECTORS } from "../mock-models/mock-sectors";
import { CareerSector } from "../models/career-sector";
import { CareerService } from "./career.service";

@Injectable({
  providedIn: "root",
})
export class CareerSectorService {
  constructor(public http: HttpClient) {}

  getSector(id: number): Observable<CareerSector> {
    return (this.getSectors().pipe(
      map(txs => txs.find(txn => txn.id == id))
      )
    );
    
  }

  public getSectors(): Observable<CareerSector[]> {
    const sheetno="onajuge"
    const sheetid = "1XhjK3Enh19TIxCxgIC7mma89CMohAmpFUbJzGiPP7Fk"
    const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
        
            return this.http.get<CareerSector[]>(url)
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
                  const myArray = <CareerSector[]>returnArray
                  return myArray;
                })
              );
          }
}
