
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  url: string = "http://localhost:8080/proyecto/";   //barra al final asi no va en cada uno abajo

  constructor(private httpClient: HttpClient) { }

  public listaProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public findProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `find/${id}`);
  }

  //primer Proyecto es un alias, segundo es el Proyecto del model, o sea la entidad
  public saveProyecto(Proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Proyecto);
  }

  public updateProyecto(id: number, Proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Proyecto);
  }

  public deleteProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }


}