import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoWeb } from '../model/proyecto-web';

@Injectable({
  providedIn: 'root'
})

export class ProyectoWebService {

  url: string = "http://localhost:8080/proyectoweb/";   //barra al final asi no va en cada uno abajo

  constructor(private httpClient: HttpClient) { }

  public listaProyectosW(): Observable<ProyectoWeb[]> {
    return this.httpClient.get<ProyectoWeb[]>(this.url + 'lista');
  }

  public findProyectoW(id: number): Observable<ProyectoWeb> {
    return this.httpClient.get<ProyectoWeb>(this.url + `find/${id}`);
  }

  public saveProyectoW(ProyectoWeb: ProyectoWeb): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', ProyectoWeb);
  }

  public updateProyectoW(ProyectoWeb: ProyectoWeb): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', ProyectoWeb);
  }

  public deleteProyectoW(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}