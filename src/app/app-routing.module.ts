import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'aadmin', component:AadminComponent, canActivate:[GuardGuard]},   //, canActivate:[GuardGuard]
  /* {path: '', redirectTo:'/index', pathMatch:'full'}, */
  // {path:'**', component:ErrorComponent}     hacer pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
