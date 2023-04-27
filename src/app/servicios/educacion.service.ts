import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
//import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
                                                                                     //barra llama a un pedacito de json,como los pipes en html?
  url:string= "http://localhost:8080/educacion/";      //"http://localhost:8080/educacion"        //barra al final asi no va en cada uno abajo
  
  constructor(private httpClient:HttpClient) { }      //primer httpclient es alias, segundo lo importamos arriba, httpclient es herramienta para hacer el crud                                
                                                      
    public listaEstudios(): Observable<Educacion[]>{                     ////////va el nombre del controller en java, el de arriba
      return this.httpClient.get<Educacion[]>(this.url + 'lista');         
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

    //igual al de arriba, uno es post, otro put, por convencion, podrian ser los dos post (?)  expres 18, 22:20'
    //''no se va a hacer una nueva experiencia porque vamos a mandar el id dentro del formulario,vamos a sobreescribir,,
    //ESE ES EL SECRETO DE QUE EL UPDATE ANDE BIEN'' HHHHHHHHMMMMMM AHHHHHHHHHHHH
    /*public updateEstudio(Educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Educacion);
    }*/
    public updateEstudio(id: number, Educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + `update/${id}`, Educacion);
    }
      
  
    //ID: NUMBER, PORQUE ES TYPESCRIPT, hay q decirle de que tipo es, <any> borra todos los campos q tenga ese id
    public deleteEstudio(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }



}


