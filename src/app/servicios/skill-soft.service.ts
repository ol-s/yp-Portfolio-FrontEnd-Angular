import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillSoft } from '../model/skill-soft';

@Injectable({
  providedIn: 'root'
})
export class SkillSoftService {


  url: string = "http://localhost:8080/skillsoft/"; 

  constructor(private httpClient: HttpClient) { }

  public listaSkillsS(): Observable<SkillSoft[]> {
    return this.httpClient.get<SkillSoft[]>(this.url + 'lista');
  }

  public findSkillS(id: number): Observable<SkillSoft> {
    return this.httpClient.get<SkillSoft>(this.url + `find/${id}`);
  }

  public saveSkillS(SkillSoft: SkillSoft): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', SkillSoft);
  }

  // public updateSkillS(SkillSoft: SkillSoft): Observable<any> {
  //   return this.httpClient.put<any>(this.url + 'update', SkillSoft);
  // }
  public updateSkillS(id:number, SkillSoft: SkillSoft): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, SkillSoft);
  }

  public deleteSkillS(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}