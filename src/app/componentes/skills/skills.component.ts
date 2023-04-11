///////////////////////////////////////////////////integrado al back, desde 11-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';                  
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';
import { SkillWeb } from 'src/app/model/skill-web';
import { SkillWebService } from 'src/app/servicios/skill-web.service';
import { Skillidioma } from 'src/app/model/skill-idioma';
import { SkillIdiomaService } from 'src/app/servicios/skill-idioma.service';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicios/skill-soft.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skillWeb: SkillWeb[] = [];
  skillsTodasProgram: any = [];

  skillArq: SkillArq[] = [];
  skillsTodasArq: any = [];

  skillIdioma: Skillidioma[] = [];
  skillsTodasIdiom: any = [];

  skillSoft: SkillSoft[] = [];
  skillsTodasBlandas: any = [];

  constructor(
    private saServ: SkillArqService, 
    private swServ: SkillWebService,
    private siServ: SkillIdiomaService,
    private ssServ: SkillSoftService) { }


  ngOnInit(): void {  
    this.cargarSkillArq();
    this.cargarSkillWeb();
    this.cargarSkillidioma();
    this.cargarSkillSoft();
  }

  cargarSkillArq(): void {
    this.saServ.listaSkillsA().subscribe(data => { this.skillsTodasArq = data });    
  }

  cargarSkillWeb(): void {
    this.swServ.listaSkillsW().subscribe(data => { this.skillsTodasProgram = data });    
  }

  cargarSkillidioma(): void {
    this.siServ.listaSkillsD().subscribe(data => { this.skillsTodasIdiom = data });    
  }

  cargarSkillSoft(): void {
    this.ssServ.listaSkillsS().subscribe(data => { this.skillsTodasBlandas = data });   
  }

 


  deleteSkillA(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.saServ.deleteSkillA(id).subscribe(data => { });
      window.location.reload();     
      alert ("¡Item eliminado! ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

  deleteSkillW(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.swServ.deleteSkillW(id).subscribe(data => { });
      window.location.reload();     
      alert ("¡Item eliminado! ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

  deleteSkillD(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.siServ.deleteSkillD(id).subscribe(data => { });
      window.location.reload();     
      alert ("¡Item eliminado! ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

  deleteSkillS(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.ssServ.deleteSkillS(id).subscribe(data => { });
      window.location.reload();     
      alert ("¡Item eliminado! ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

}
















////////////////////////////////////CON JSON NUEVO ENTIDAD PERSONA//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 9-4-23///////////////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////

/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  //no se si dividir cada rubro skill aca tmb
  //proyectosTodos : any = [];
  //proyectosTodosWeb : any = [];

  skillsTodasProgram: any = [];
  skillsTodasArq: any = [];
  skillsTodasIdiom: any = [];
  skillsTodasBlandas: any = [];

  /****************pruebarubros*****************
  Todasrubr1: any = [];
  Todasrubr2: any = [];
  Todasrubr3: any = [];


  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 14, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros, puse los mismos alias que en educacion.ts
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
        this.skillsTodasProgram = data.skillsProgramacion,
        this.skillsTodasArq = data.skillsDisenioArquitectura,
        this.skillsTodasIdiom = data.skillsIdiomas,
        this.skillsTodasBlandas = data.skillsHabilidadesBlandas

          /****************pruebarubros*****************
          this.Todasrubr1 = data.rubrosss[0].rubro1,
          this.Todasrubr2 = data.rubrosss[1].rubro2,
          this.Todasrubr3 = data.rubrosss[2].rubro3
    

    });
  }
}

*/