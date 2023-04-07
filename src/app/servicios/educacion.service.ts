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

    //igual al de arriba, uno es post, otro put, por convencion, podrian ser los dos post (?)  expres 18, 22:20'
    //''no se va a hacer una nueva experiencia porque vamos a mandar el id dentro del formulario,vamos a sobreescribir,,
    //ESE ES EL SECRETO DE QUE EL UPDATE ANDE BIEN'' HHHHHHHHMMMMMM AHHHHHHHHHHHH
    public updateEstudio(Educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Educacion);
      }
  
    //ID: NUMBER, PORQUE ES TYPESCRIPT, hay q decirle de que tipo es, <any> borra todos los campos q tenga ese id
    public deleteEstudio(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

  

    //dejo el original, el de arriba, cos en java lo nombre asi, deleteEstudio,,,,,no se si llevan el mismo nombre??
    /*
    public delete(id: number):Observable<any>{
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }*/




/*  nada anda, no entrego,,,,,,,encima falta el edit

    public delete(id: number):Observable<any>{
      return this.httpClient.delete<number>(this.url + "delete/"+ id);
  }

/*
    deleteE (id: number):Observable<number>{
     
      return this.httpClient.delete<number>(this.bookUrl+"/"+bookid);
    }*/

}








//editar por id seria, CREO, IGUAL TENDRIA QUE CAMBIAR EN EL NETB TOO
//  public updateEstudio(id: number, experiencia: Experiencia):Observable<any>{
//       return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
//       }

// en netb
// //@RequestBody Educacion edu)
// //request body sacar? 'por resquest body o por objeto, so deja Educacion
// @putMapping ("/update/{id}")
// public vouid update (@PathVariable ("id") int id,Educacion edu){
// sEducacion.save(edu);
// }  
// //////este no era el que no me andaba en postman??? q volvia null null null?





//////////////////////////////////////////////////////////////////////////////////////////////////////////lo mismo con coments

// export class EducacionService {
//                                                                                      //barra llama a un pedacito de json,como los pipes en html?
//   url:string= "/servidor/educacion/";      //"http://localhost:8080/educacion"        //barra al final asi no va en cada uno abajo
  
//   constructor(private httpClient:HttpClient) { }      //primer httpclient es alias, segundo lo importamos arriba, httpclient es herramienta para hacer el crud                                
                                                      
//     public listaEstudios(): Observable<Educacion[]>{                     ////////va el nombre del controller 1er o 2 renglon?????!!!!!
//       return this.httpClient.get<Educacion[]>(this.url + 'lista');          /////con los tengo diferentes, va el de arriba CREO
//     }                                                                       ////salen del CEducacion del back en java 
                                                                          
//     // METODO (nombre igual que en el controller en java, public listaEstudios()  ): observable <me trae un array []>---ABAJO ES UNA SOLA BY ID!
//     //httpclient will GET <todo el array de educacion[]>(esta url escrita arriba +'lista' EN COMILLAS SIMPLES, OJO)


//     public findEstudio(id: number):Observable<Educacion>{
//     return this.httpClient.get<Educacion>(this.url + `find/${id}`);           //los: lista/find/new/update/delete, como los describi en java
//     }                                                                        //localhost:8080/educacion/find/${id}       es seria la ruta completa
  
//     //primer Educacion es un alias, segundo es el Educacion del model, o sea la entidad Educacion! (?)
//     //observable de any ................etc.......'new', Educacion (del alias del primer Educacion, si clikeas te marca ese y el otro)
//     public saveEducacion(Educacion: Educacion):Observable<any>{
//       return this.httpClient.post<any>(this.url + 'new', Educacion);
//       }

//     //igual al de arriba, uno es post, otro put, por convencion, podrian ser los dos post (?)  expres 18, 22:20'
//     //''no se va a hacer una nueva experiencia porque vamos a mandar el id dentro del formulario,vamos a sobreescribir,,
//     //ESE ES EL SECRETO DE QUE EL UPDATE ANDE BIEN'' HHHHHHHHMMMMMM AHHHHHHHHHHHH
//     public updateEstudio(Educacion: Educacion):Observable<any>{
//       return this.httpClient.put<any>(this.url + 'update', Educacion);
//       }
  
//     //ID: NUMBER, PORQUE ES TYPESCRIPT, hay q decirle de que tipo es, <any> borra todos los campos q tenga ese id
//     public deleteEstudio(id: number):Observable<any>{
//       return this.httpClient.delete<any>(this.url + `delete/${id}`);
//       }


// }
