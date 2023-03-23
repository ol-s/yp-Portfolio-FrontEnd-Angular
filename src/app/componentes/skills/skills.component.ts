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

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 14, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros, puse los mismos alias que en educacion.ts
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
        this.skillsTodasProgram = data.skillsProgramacion,
        this.skillsTodasArq = data.skillsDisenioArquitectura,
        this.skillsTodasIdiom = data.skillsIdiomas,
        this.skillsTodasBlandas = data.skillsHabilidadesBlandas
    });
  }
}

