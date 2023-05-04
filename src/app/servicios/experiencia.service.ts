import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
                                                                                    
  url:string= "https://backols.onrender.com/experiencia/";      //"http://localhost:8080/experiencia/"     
  
  constructor(private httpClient:HttpClient) { }                                
                                                      
    public listaExp(): Observable<Experiencia[]>{                   
      return this.httpClient.get<Experiencia[]>(this.url + 'lista');         
    }                                                                     

    public findExperiencia(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `find/${id}`);         
    }                                                                       
  
    public saveExperiencia(Experiencia: Experiencia):Observable<any>{
      return this.httpClient.post<any>(this.url + 'new', Experiencia);
    }

    public updateExperiencia(id: number, Experiencia: Experiencia):Observable<any>{
      return this.httpClient.put<any>(this.url + `update/${id}`, Experiencia);
    }
      
    public deleteExperiencia(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}