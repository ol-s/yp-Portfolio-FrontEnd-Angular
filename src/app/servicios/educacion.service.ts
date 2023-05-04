import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
                                                                         
  //url:string= "http://localhost:8080/educacion/"; 
  url:string= "https://backols.onrender.com/educacion/";    
  
  constructor(private httpClient:HttpClient) { }                               
                                                      
    public listaEstudios(): Observable<Educacion[]>{                     
      return this.httpClient.get<Educacion[]>(this.url + 'lista');         
    }                                                                      
                                                                      
    public findEstudio(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `find/${id}`);  // lista/find/new/update/delete, como esten en el back, controller
    }                                                                //localhost:8080/educacion/find/${id}
    
    public saveEducacion(Educacion: Educacion):Observable<any>{
      return this.httpClient.post<any>(this.url + 'new', Educacion);
    }

    public updateEstudio(id: number, Educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + `update/${id}`, Educacion);
    }
      
    //<any> borra todos los campos q tenga ese id
    public deleteEstudio(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}


