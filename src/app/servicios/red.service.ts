import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})

export class RedService {

  url:string= "http://localhost:8080/red/";   //barra al final asi no va en cada uno abajo
  
  constructor(private httpClient:HttpClient) { }                             
                                                      
    public listaRedes(): Observable<Red[]>{                     
      return this.httpClient.get<Red[]>(this.url + 'lista');          
    }                                                                                                                                               

    public findRed(id: number):Observable<Red>{
    return this.httpClient.get<Red>(this.url + `find/${id}`);           
    }                                                                     
  
    //primer red es un alias, segundo es el red del model, o sea la entidad
    public saveRed(Red: Red):Observable<any>{
      return this.httpClient.post<any>(this.url + 'new', Red);
      }

    public updateRed(Red: Red):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Red);
      }
   
    public deleteRed(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }


}