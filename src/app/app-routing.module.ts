import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //provee el servicio de routeo
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
//login 19-4-23
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [

  { path: '', component: IndexComponent, canActivate: [GuardGuard] }, //pagina principal http://localhost:4200/

  { path: 'login', component: LoginComponent }, //login http://localhost:4200/login

  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
