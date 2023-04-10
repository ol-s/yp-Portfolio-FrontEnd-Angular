///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';                    
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ProyectoWeb } from 'src/app/model/proyecto-web';
import { ProyectoWebService } from 'src/app/servicios/proyecto-web.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];
  proyectosTodos : any = [];

  proyectoweb: ProyectoWeb[] = [];
  proyectosTodosWeb : any = [];

  constructor(private proyServ: ProyectoService, private proyWebServ: ProyectoWebService) { }


  ngOnInit(): void {  
    this.cargarProyecto();
    this.cargarProyectoWeb();
  }

  
  //this. es para utilizar una variable que esta fuera del metodo, si le pasara id entre los parenteiss, abajo no pondria 'this.' ,,,express 18, min 38'
  //solo este metodo hacemos?? y el new/find/update/delete?..en el servicio! 
  cargarProyecto(): void {
    this.proyServ.listaProyectos().subscribe(data => { this.proyectosTodos = data });
    
  }
  cargarProyectoWeb(): void {
    this.proyWebServ.listaProyectosW().subscribe(data => { this.proyectosTodosWeb = data });
    
  }




  ///PARA ARQ
  //----tendria que poner delete nomas, pero habria q cambiar todo en el back...//////IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deleteProyecto(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.proyServ.deleteProyecto(id).subscribe(data => { });
      window.location.reload();
      
      alert ("¡Item eliminado! ✔. Click en 'Aceptar' para recargar la página.");
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      //PRENDO NOMAS, DA PROBLEMAS sin las dos alertas,,,ya les puse emojis so dejar asi
    }
  }

  //PARA WEB
  deleteProyectoW(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.proyWebServ.deleteProyectoW(id).subscribe(data => { });
      window.location.reload();     
      alert ("¡Item eliminado! ✔. Click en 'Aceptar' para recargar la página.");

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
*/