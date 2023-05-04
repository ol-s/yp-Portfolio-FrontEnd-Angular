import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skillidioma } from '../model/skill-idioma';

@Injectable({
  providedIn: 'root'
})
export class SkillIdiomaService {


  //url: string = "http://localhost:8080/skillidioma/";
  url: string = "https://backols.onrender.com/skillidioma/"; 

  constructor(private httpClient: HttpClient) { }

  public listaSkillsD(): Observable<Skillidioma[]> {
    return this.httpClient.get<Skillidioma[]>(this.url + 'lista');
  }

  public findSkillD(id: number): Observable<Skillidioma> {
    return this.httpClient.get<Skillidioma>(this.url + `find/${id}`);
  }

  public saveSkillD(Skillidioma: Skillidioma): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Skillidioma);
  }

  // public updateSkillD(Skillidioma: Skillidioma): Observable<any> {
  //   return this.httpClient.put<any>(this.url + 'update', Skillidioma);
  // }
  public updateSkillD(id:number, Skillidioma: Skillidioma): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Skillidioma);
  }

  public deleteSkillD(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
