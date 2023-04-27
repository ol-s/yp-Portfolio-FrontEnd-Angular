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
      //this.ruta.navigate(['/login']); //te lleva al login si o si
      //this.ruta.navigate(['/']);  //se cuelga y no entra a ningun lado
      return true;
      //21-4-23 lo tenia en false por eso me iba para atras y veia sin loguearme los botones edit
    }
  }

}
