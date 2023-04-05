import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
                                                                                     //barra llama a un pedacito de json,como los pipes en html?
  url:string= "/servidor/educacion/";      //"http://localhost:8080/educacion"        //barra al final asi no va en cada uno abajo
  
  constructor(private httpClient:HttpClient) { }      //primer httpclient es alias, segundo lo importamos arriba, httpclient es herramienta para hacer el crud                                
                                                      
    public listaEstudios(): Observable<Educacion[]>{                     ////////va el nombre del controller 1er o 2 renglon?????!!!!!
      return this.httpClient.get<Educacion[]>(this.url + 'lista');          /////con los tengo diferentes, va el de arriba CREO
    }                                                                       ////salen del CEducacion del back en java 
                                                                          
    // METODO (nombre igual que en el controller en java, public listaEstudios()  ): observable <me trae un array []>---ABAJO ES UNA SOLA BY ID!
    //httpclient will GET <todo el array de educacion[]>(esta url escrita arriba +'lista' EN COMILLAS SIMPLES, OJO)


    public findEstudio(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `find/${id}`);           //los: lista/find/new/update/delete, como los describi en java
    }                                                                        //localhost:8080/educacion/find/${id}       es seria la ruta completa
  
    //primer Educacion es un alias, segundo es el Educacion del model, o sea la entidad Educacion! (?)
    //observable de any ................etc.......'new', Educacion (del alias del primer Educacion, si clikeas te marca ese y el otro)
    public saveEducacion(Educacion: Educacion):Observable<any>{
      return this.httpClient.post<any>(this.url + 'new', Educacion);
      }

    //igual al de arriba, uno es post, otro put, por convencion, podrian ser los dos post (?)  expres 18, 22, 20'
    //''no se va a hacer una nueva experiencia porque vamos a mandar el id dentro del formulario,vamos a sobreescribir,,
    //ESE ES EL SECRETO DE QUE EL UPDATE ANDE BIEN'' HHHHHHHHMMMMMM AHHHHHHHHHHHH
    public updateEstudio(Educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Educacion);
      }
  
    public deleteEstudio(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

  // min30'  , corto
  //https://www.youtube.com/watch?v=9wUALiL0UKA&list=PL1oXSbt2OIbG2ipcgJLQ8P64rwS-bz9tZ

}