//integrado al back. 11-4-23
import { Component, OnInit } from '@angular/core';                  
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';
import { SkillWeb } from 'src/app/model/skill-web';
import { SkillWebService } from 'src/app/servicios/skill-web.service';
import { Skillidioma } from 'src/app/model/skill-idioma';
import { SkillIdiomaService } from 'src/app/servicios/skill-idioma.service';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicios/skill-soft.service';
//para ver botones edit w logueado
import { Persona } from 'src/app/model/persona';  

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

  id?: number;

  //para ver botones edit when logueado  19-4-23
  personaLog: Persona= new Persona("", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", );
  modoEdit: any;

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

    //para ver botones edit when logueado  21-4-23
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true; 
    }
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

}






//json angular hasta 9-1-23
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skillsTodasProgram: any = [];
  skillsTodasArq: any = [];
  skillsTodasIdiom: any = [];
  skillsTodasBlandas: any = [];

  /****************pruebarubros*****************
  Todasrubr1: any = [];
  Todasrubr2: any = [];
  Todasrubr3: any = [];

  constructor(private datos: DatosService) { }

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