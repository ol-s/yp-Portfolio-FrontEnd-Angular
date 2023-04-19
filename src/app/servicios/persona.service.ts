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
  // METODO (nombre igual que en el controller en java, public listaEstudios()  ): observable <me trae un array []>---ABAJO ES UNA SOLA BY ID!
  //httpclient will GET <todo el array de educacion[]>(esta url escrita arriba +'lista' EN COMILLAS SIMPLES, OJO)


  public findPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `find/${id}`);
  }

  //primer Persona es un alias, segundo es el Persona del model, o sea la entidad persona! (?)
  //observable de any ................etc.......'new', Educacion (del alias del primer Educacion, si clikeas te marca ese y el otro)
  public savePersona(Persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Persona);
  }

  //igual al de arriba, uno es post, otro put, por convencion, podrian ser los dos post (?)  expres 18, 22:20'
  //''no se va a hacer una nueva experiencia porque vamos a mandar el id dentro del formulario,vamos a sobreescribir,,
  //ESE ES EL SECRETO DE QUE EL UPDATE ANDE BIEN'' HHHHHHHHMMMMMM AHHHHHHHHHHHH
  // public updatePersona(Persona: Persona): Observable<any> {
  //   return this.httpClient.put<any>(this.url + 'update', Persona);
  // }
  public updatePersona(id: number, Persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Persona);
  }

  public deletePersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }


}
