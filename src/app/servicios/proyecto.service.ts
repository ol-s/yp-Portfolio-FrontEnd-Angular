
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  //url: string = "http://localhost:8080/proyecto/"; 
  url: string = "https://backols.onrender.com/proyecto/"; 

  constructor(private httpClient: HttpClient) { }

  public listaProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public findProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `find/${id}`);
  }

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