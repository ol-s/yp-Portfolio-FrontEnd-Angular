import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path:'', component:IndexComponent},

  // {path: 'educacion', component: EducacionComponent},        no se bien para que se trae aca todavia
  // {path: 'proyectos', component: ProyectosComponent},
  // {path: '**', component: Pagina404Component} ,

  // {path: 'login', component: LoginComponent},       booooooooorrarrrrrrrrrrrrrrrr todo esto, 
  // {path: 'aadmin', component:AadminComponent, canActivate:[GuardGuard]},   //, canActivate:[GuardGuard]
  /* {path: '', redirectTo:'/index', pathMatch:'full'}, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
