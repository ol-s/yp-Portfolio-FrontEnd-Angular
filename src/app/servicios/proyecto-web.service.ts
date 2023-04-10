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

  public listaProyectos(): Observable<ProyectoWeb[]> {
    return this.httpClient.get<ProyectoWeb[]>(this.url + 'lista');
  }

  public findProyecto(id: number): Observable<ProyectoWeb> {
    return this.httpClient.get<ProyectoWeb>(this.url + `find/${id}`);
  }

  public saveProyecto(ProyectoWeb: ProyectoWeb): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', ProyectoWeb);
  }

  public updateProyecto(ProyectoWeb: ProyectoWeb): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', ProyectoWeb);
  }

  public deleteProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}