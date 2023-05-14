//21-4-23

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio: AutenticacionService, private ruta: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.autenticacionServicio.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      return true;
    } else {
      //this.ruta.navigate(['/login']); //para que te lleve al login si o si, + return false abajo
      return true;      
    }
  }

}
