import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "http://localhost:8080/persona/";   //barra al final asi no va en cada uno abajo

  constructor(private httpClient: HttpClient) { }

  public listaPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public findPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `find/${id}`);
  }

  public savePersona(Persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Persona);
  }

  public updatePersona(id: number, Persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Persona);
  }

  public deletePersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
