///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                          //*** 
import { PersonaService } from 'src/app/servicios/persona.service';

//redes es entidad aparte pero insertada tmb en la seccion header
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})

export class HeadernameComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];

  red :Red [] = [];
  redesTodas : any = [];
  

  //serviEduc es mi alias
  constructor(private persoServ: PersonaService, private redServ: RedService) { }


  ngOnInit(): void {  //DESPUES DEL METODO ABAJO CARGAMOS ACA ARRIBA 
    this.cargarPersona();
    this.cargarRed();    //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA
  }

  
  //this. es para utilizar una variable que esta fuera del metodo, si le pasara id entre los parenteiss, abajo no pondria 'this.' ,,,express 18, min 38'
  //solo este metodo hacemos?? y el new/find/update/delete?..en el servicio! 
  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  }
  //listaPERSONAS()  es lo mismo que escribi en el PERSONA.service.ts,,,,si tuviera algo entre parentsis aca lo pongo 
  //'data' es alias
  

  cargarRed(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });
    
  }









  //----ESTE ANDAN BIEN LAS ALERTAS!!!//////IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deletePersona(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      //PRENDO NOMAS, DA PROBLEMAS
    }
  }

}


























//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 9-4-23/////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////////////////////////////
///////////////////prendo este para editar modales cos SE MUERE LA ASUS CON LOS DOS CORRIENDO A LAVEZ/////////////////////////

/*
import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})
export class HeadernameComponent implements OnInit {

  //headerTodos : any =[];
  personaItems : any =[];
  redesTodas : any;

  //para traer un solo dato
  // nombreCompleto : string = '';
  // subtitulo : string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos:DatosService){}


  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{  
      this.personaItems = data.persona,   
      this.redesTodas = data.redes
    });
    
    }



}


*/ 