import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})

export class RedService {

  //url: string = "http://localhost:8080/red/"; 
  url: string = "https://backols.onrender.com/red/";

  constructor(private httpClient: HttpClient) { }

  public listaRedes(): Observable<Red[]> {
    return this.httpClient.get<Red[]>(this.url + 'lista');
  }

  public findRed(id: number): Observable<Red> {
    return this.httpClient.get<Red>(this.url + `find/${id}`);
  }

  public saveRed(Red: Red): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Red);
  }

  public updateRed(id: number, Red: Red): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Red);
  }

  public deleteRed(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }


}