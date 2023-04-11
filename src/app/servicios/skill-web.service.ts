import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillWeb } from '../model/skill-web';

@Injectable({
  providedIn: 'root'
})
export class SkillWebService {

  url: string = "http://localhost:8080/skillweb/"; 

  constructor(private httpClient: HttpClient) { }

  public listaSkillsW(): Observable<SkillWeb[]> {
    return this.httpClient.get<SkillWeb[]>(this.url + 'lista');
  }

  public findSkillW(id: number): Observable<SkillWeb> {
    return this.httpClient.get<SkillWeb>(this.url + `find/${id}`);
  }

  public saveSkillW(SkillWeb: SkillWeb): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', SkillWeb);
  }

  public updateSkillW(SkillWeb: SkillWeb): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', SkillWeb);
  }

  public deleteSkillW(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
