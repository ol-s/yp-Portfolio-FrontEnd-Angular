import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillArq } from '../model/skill-arq';

@Injectable({
  providedIn: 'root'
})

export class SkillArqService {


  //url: string = "http://localhost:8080/skillarq";
  url: string = "https://backols.onrender.com/skillarq";

  constructor(private httpClient: HttpClient) { }

  public listaSkillsA(): Observable<SkillArq[]> {
    return this.httpClient.get<SkillArq[]>( this.url + '/lista');
  }

  public findSkillA(id: number): Observable<SkillArq> {
    return this.httpClient.get<SkillArq>(this.url + `/find/${id}`);
  }

  public saveSkillA(SkillArq: SkillArq): Observable<any> {
    return this.httpClient.post<any>(this.url + '/new', SkillArq);
  }

  public updateSkillA(id:number, SkillArq: SkillArq): Observable<any> {
    return this.httpClient.put<any>(this.url + `/update/${id}`, SkillArq);
  }

  public deleteSkillA(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/delete/${id}`);
  }

}
