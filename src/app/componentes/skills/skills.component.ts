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
  Todasrubr3: any = [];*/


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
          this.Todasrubr3 = data.rubrosss[2].rubro3*/
    

    });
  }
}

