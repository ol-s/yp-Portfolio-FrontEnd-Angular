///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';                         
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})

export class RedesComponent implements OnInit {
 
  red :Red [] = [];
  redesTodas : any = [];
  
  constructor(private redServ: RedService) { }

  ngOnInit(): void {  
    this.cargarPersona(); //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA
  }
  
  cargarPersona(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });
    
  }
  //listaPERSONAS()  es lo mismo que escribi en el PERSONA.service.ts,,,,si tuviera algo entre parentsis aca lo pongo 
  //'data' es alias
  




  //delete dentro del html (click)
  deleteRed(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.redServ.deleteRed(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      //PRENDO NOMAS, DA PROBLEMAS
    }
  }

}


















//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 9-4-23/////////////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC////////////////////////
////////////////////////////prendo este para editar modales cos SE MUERE LA ASUS CON LOS DOS CORRIENDO A LAVEZ/////////////////////////
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redesTodas: any;
  constructor(private datos: DatosService) { }
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redesTodas = data.redes
    });
  }
}
*/