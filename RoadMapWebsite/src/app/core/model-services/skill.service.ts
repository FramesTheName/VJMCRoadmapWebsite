import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Skill } from "../models/skill";
import { SKILLS } from "../mock-models/mock-skill";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SkillService {
  constructor(private http: HttpClient) {}


  getSkill(id: number): Observable<Skill> {
    //return of(CAREERS.find((career) => career.id === id))
    return (this.getSkills().pipe(
      map(txs => txs.find(txn => txn.id == id))
      )
    );
  }

  public getSkills(): Observable<Skill[]> {
    const sheetno="o95l93h"
         const sheetid = "1XhjK3Enh19TIxCxgIC7mma89CMohAmpFUbJzGiPP7Fk"
         const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
        
    return this.http.get<Skill[]>(url)
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
        const myArray = <Skill[]>returnArray
        return myArray;
      })
    );
}
}
