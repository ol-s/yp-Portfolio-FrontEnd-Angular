import { Injectable } from '@angular/core';
//import { BehaviorSubject, Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//21-4-23
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  //url = 'http://localhost:8080/autenticacion/login'  //probar sin persona,,,,, no, esta el metodo dentro de persona//vz no puso persona
  url = 'http://localhost:8080/persona/autenticacion/login';      
  //url = 'https://miportfolio.com/persona/autenticacion/login' //aca va el link de render creo
  
  currentUserSubject: BehaviorSubject<any>; 
  
  sessionStorage: any;



  constructor(private http: HttpClient) { 
   console.log('----servicio de autenticacion corriendo');

   //inicializar currentUserSubject + metodo parse de json + 'currentuser' es alias + sino hay nada devolver vacio '{}'
   this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  
  //metodo iniciar sesion/login etc   + (credenciales del usuario) +llaman=mos a la api, retornamos al controlador
  loginPersona(credenciales: any): Observable<any>{
    console.log(credenciales);
    
    var httpOptions={
      headers:new HttpHeaders({
        'ContentType':'application/json'
      })
    }

    //localstorage almacena datos en el navegador de forma indefinida hasta que limpiemos manualmente, 
    //sesionstorage almacena los datos mientras q la pestania del navegador este abierta, si cerramos los datos se eliminan
    //return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data=> {
    return this.http.post<any>(this.url, credenciales).pipe(map(data=> { //masterclass 8.2
        sessionStorage.setItem('currentUser',JSON.stringify(data));  

        this.currentUserSubject.next(data);
        console.log("servicio de autenticacion corriendo " + JSON.stringify(data));

        return data;
      }));
   }

  
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}

