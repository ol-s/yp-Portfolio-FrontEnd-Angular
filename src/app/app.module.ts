import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para formularios reactivos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //login

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
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ModalHeaderComponent } from './modales/modal-header/modal-header.component';
import { ModalEducacionEditComponent } from './modales/modal-educacion-edit/modal-educacion-edit.component';
import { ModalProyectosEditComponent } from './modales/modal-proyectos-edit/modal-proyectos-edit.component';
import { ModalSkillArqEditComponent } from './modales/modal-skill-arq-edit/modal-skill-arq-edit.component';
import { ModalSkillWebEditComponent } from './modales/modal-skill-web-edit/modal-skill-web-edit.component';
import { ModalSkillIdiomaEditComponent } from './modales/modal-skill-idioma-edit/modal-skill-idioma-edit.component';
import { ModalSkillSoftEditComponent } from './modales/modal-skill-soft-edit/modal-skill-soft-edit.component';
import { ModalProyectoswebEditComponent } from './modales/modal-proyectosweb-edit/modal-proyectosweb-edit.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
//login 19-4-23
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';


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
    Pagina404Component,
    RedesComponent,
    ModalHeaderComponent,
    ModalEducacionEditComponent,
    ModalProyectosEditComponent,
    ModalSkillArqEditComponent,
    ModalSkillWebEditComponent,
    ModalSkillIdiomaEditComponent,
    ModalSkillSoftEditComponent,
    ModalProyectoswebEditComponent,
    ModalExperienciaComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //para formularios reactivos
    ReactiveFormsModule //para formularios reactivos  
  ],
  
  providers: [PersonaService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
