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
import { LogoutComponent } from './componentes/logout/logout.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ModalHeaderComponent } from './modales/modal-header/modal-header.component';
//import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
//import { ModalEducacionAddComponent } from './modales/modal-educacion-add/modal-educacion-add.component';
import { ModalEducacionEditComponent } from './modales/modal-educacion-edit/modal-educacion-edit.component';
//import { ModalSkillEditComponent } from './modales/modal-skill-edit/modal-skill-edit.component';
//import { ModalSkillAddComponent } from './modales/modal-skill-add/modal-skill-add.component';
//import { ModalProyectosAddComponent } from './modales/modal-proyectos-add/modal-proyectos-add.component';
import { ModalProyectosEditComponent } from './modales/modal-proyectos-edit/modal-proyectos-edit.component';
//import { ModalContactoComponent } from './modales/modal-contacto/modal-contacto.component';
//import { ModalProyectoswebAddComponent } from './modales/modal-proyectosweb-add/modal-proyectosweb-add.component';
//import { ModalSkillArqAddComponent } from './modales/modal-skill-arq-add/modal-skill-arq-add.component';
import { ModalSkillArqEditComponent } from './modales/modal-skill-arq-edit/modal-skill-arq-edit.component';
//import { ModalSkillWebAddComponent } from './modales/modal-skill-web-add/modal-skill-web-add.component';
import { ModalSkillWebEditComponent } from './modales/modal-skill-web-edit/modal-skill-web-edit.component';
//import { ModalSkillIdiomaAddComponent } from './modales/modal-skill-idioma-add/modal-skill-idioma-add.component';
import { ModalSkillIdiomaEditComponent } from './modales/modal-skill-idioma-edit/modal-skill-idioma-edit.component';
//import { ModalSkillSoftAddComponent } from './modales/modal-skill-soft-add/modal-skill-soft-add.component';
import { ModalSkillSoftEditComponent } from './modales/modal-skill-soft-edit/modal-skill-soft-edit.component';
import { ModalProyectoswebEditComponent } from './modales/modal-proyectosweb-edit/modal-proyectosweb-edit.component';
//import { ModalRedAddComponent } from './modales/modal-red-add/modal-red-add.component';
//import { ModalRedEditComponent } from './modales/modal-red-edit/modal-red-edit.component';
//import { ModalBannerEditComponent } from './modales/modal-banner-edit/modal-banner-edit.component';
//import { PanelComponent } from './componentes/panel/panel.component';
//import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
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
    LogoutComponent,
    Pagina404Component,
    RedesComponent,
    ModalHeaderComponent,
    //ModalSobremiComponent,
    //ModalEducacionAddComponent,
    ModalEducacionEditComponent,
    //ModalSkillEditComponent,
    //ModalSkillAddComponent,
    //ModalProyectosAddComponent,
    ModalProyectosEditComponent,
    //ModalContactoComponent,
    //ModalProyectoswebAddComponent,
    //ModalSkillArqAddComponent,
    ModalSkillArqEditComponent,
    //ModalSkillWebAddComponent,
    ModalSkillWebEditComponent,
    //ModalSkillIdiomaAddComponent,
    ModalSkillIdiomaEditComponent,
    //ModalSkillSoftAddComponent,
    ModalSkillSoftEditComponent,
    ModalProyectoswebEditComponent,
    //ExperienciaComponent,
    ModalExperienciaComponent,
    //ModalRedAddComponent,
    //ModalRedEditComponent,
    //ModalBannerEditComponent,
    //PanelComponent,
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
