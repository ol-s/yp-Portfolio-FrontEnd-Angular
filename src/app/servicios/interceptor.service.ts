
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionServ: AutenticacionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.autenticacionServ.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      request.clone({   
        setHeaders:{    //''setear en el encabezado el token'' dice en la masterclass 8.2, if no token?  anywayyy
          Authorization: `Bearer ${currentUser.id}` //devuelve los datos de la persona
        }
      })
    }
    //console.log("Interceptor corriendo "+ JSON.stringify(currentUser));
    return next.handle(request);
  }
}

