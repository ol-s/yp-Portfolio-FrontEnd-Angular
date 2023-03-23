import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //proyectosTodos serian los primeros que separe como arq, luego agregue los web, pero despues los puse todos en el mismo array del json 
  //con href (+) img para los arq y href github para los web, maybe poner la urlde pagina final
  proyectosTodos : any = [];
  proyectosTodosWeb : any = [];

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 17, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros, puse los mismos alias que en educacion.ts
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {

      //------------------si saco 'proyectosArq' de json cambiar tmb aca--------------------------
      this.proyectosTodos = data.proyectosArq,
      this.proyectosTodosWeb = data.proyectosWeb
    });
  }
}

