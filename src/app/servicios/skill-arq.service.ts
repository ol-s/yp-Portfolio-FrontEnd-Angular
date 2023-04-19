import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillArq } from '../model/skill-arq';

@Injectable({
  providedIn: 'root'
})

export class SkillArqService {


  url: string = "http://localhost:8080/skillarq";   //barra al final asi no va en cada uno abajo, PUSE COMO EN JAVA BUR STILL NO ANDA EDIT

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


  //sin by id, MIO ORIGINAL
  /*
  public updateSkillA(SkillArq: SkillArq): Observable<any> {
    return this.httpClient.put<any>(this.url + '/update', SkillArq);
  }
  */
  //CON ID, YA LO CAMBIE EN JAVA PERO PARA EDITAR EN POSTMAN TODAVIA HAYQUE PONER EL ID EN EL CUERPO DEL JSON, SINO
  //CREA SKILL NUEVA, COMO ME ESTA PASANDO
  public updateSkillA(id:number, SkillArq: SkillArq): Observable<any> {
    return this.httpClient.put<any>(this.url + `/update/${id}`, SkillArq);
  }


  public deleteSkillA(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/delete/${id}`);
  }

}
