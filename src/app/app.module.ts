import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeadernameComponent } from './componentes/headername/headername.component';
import { HalfbannerComponent } from './componentes/halfbanner/halfbanner.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerfooterComponent } from './componentes/bannerfooter/bannerfooter.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ModalHeaderComponent } from './modales/modal-header/modal-header.component';
import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
import { ModalEducacionAddComponent } from './modales/modal-educacion-add/modal-educacion-add.component';
import { ModalEducacionEditComponent } from './modales/modal-educacion-edit/modal-educacion-edit.component';
import { ModalSkillEditComponent } from './modales/modal-skill-edit/modal-skill-edit.component';
import { ModalSkillAddComponent } from './modales/modal-skill-add/modal-skill-add.component';
import { ModalProyectosAddComponent } from './modales/modal-proyectos-add/modal-proyectos-add.component';
import { ModalProyectosEditComponent } from './modales/modal-proyectos-edit/modal-proyectos-edit.component';
import { ModalContactoComponent } from './modales/modal-contacto/modal-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadernameComponent,
    HalfbannerComponent,
    SobremiComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    BannerfooterComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    Pagina404Component,
    RedesComponent,
    ModalHeaderComponent,
    ModalSobremiComponent,
    ModalEducacionAddComponent,
    ModalEducacionEditComponent,
    ModalSkillEditComponent,
    ModalSkillAddComponent,
    ModalProyectosAddComponent,
    ModalProyectosEditComponent,
    ModalContactoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
