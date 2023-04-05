
import { Injectable } from '@angular/core';

//hacer peticiones y crud
import { HttpClient } from '@angular/common/http';

//suscribirse a los datos que vienen del json(?) y que reciba respuesta, si hay cambios en el json te los muestra...
import { Observable } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  //httpcliente en un alias, lo ponemos nosotros, datos de json(?)
  constructor(private httpCliente:HttpClient) { }

  // metodo  observable que devuelve datos, "getDatos getInfo" nombre de funcion, tmb lo ponemos nosobtros(?)
  getDatos():Observable<any>{

    //retorna datos via get httcliente que llama a la base de datos json o a una url , get('usar comillas simples')
    return this.httpCliente.get('./assets/basedatos/database.json');
  }
  //no me dice nada elas viias, esta en github o no??
}