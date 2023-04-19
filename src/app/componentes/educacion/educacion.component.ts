///////////////////////////////////////////////////integrado al back, desde 5.4.23///////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';                        
import { EducacionService } from 'src/app/servicios/educacion.service';
//para el banner educacion, cargado en entidad persona
import { Persona } from 'src/app/model/persona';                          
import { PersonaService } from 'src/app/servicios/persona.service';
//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  estudiosTodos: any = [];
  estudios: Educacion[] = [];

  //para el banner
  persona: Persona[] = [];
  personaItems: any = [];

  //ESTOS BORRAR DE ACA CREO?
  id?: number;
  logoInstitucion: string = '';
  logoAlt: string = '';
  anioeInstitucion: string = '';
  titulo: string = '';
  descripcion: string = '';

  constructor(
    private educServ: EducacionService, 
    private persoServ: PersonaService, 
    //private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarEstudios(); 
    this.cargarPersona();
  }

  cargarEstudios(): void {
    this.educServ.listaEstudios().subscribe(data => { this.estudiosTodos = data });  
  }
  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });  
  }





  //----ESTE ANDAN BIEN LAS ALERTAS/////////dwscartado por modal en dos pasos, BORRAR////////////////
/*
  deleteEstudio(id: number) {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        //(confirm("❗❗❗⚠️ ¿Querés eliminar este estudio?")) {
      this.educServ.deleteEstudio(id).subscribe(data => { });
      window.location.reload();
      //alert ("Estudio eliminado correctamente, da click en 'Aceptar' para recargar la pagina.");
      //alert ("Estudio eliminado ✔× ❌ ✔️ &#10060. Click en 'Aceptar' para recargar la página.");
      alert ("Estudio eliminado ✔️. Click en 'Aceptar' para recargar la página.");
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      //PRENDO NOMAS, DA PROBLEMAS
    }
  }*/


}














//////////////////////json viejo!!!OJO!!!!!!!!!////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 4.4.23/////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////////////////////////////
/////////////////////////////////////////////////prendo este para editar modales cos SE MUERE LA ASUS CON LOS DOS CORRIENDO A LAVEZ/////////////////////////



/*
 import { Component, OnInit } from '@angular/core';
 import { DatosService } from 'src/app/servicios/datos.service';

 @Component({
   selector: 'app-educacion',
   templateUrl: './educacion.component.html',
   styleUrls: ['./educacion.component.css']
 })

 export class EducacionComponent implements OnInit {       //con oninit me tira error, faltaba import oninit en linea 1               
   //export class EducacionComponent {

   //instanciamos la variable, para traer un array completo [], 'any'
   estudiosTodos: any = [];
   //estudios: Estudio[]=[];    para llamar de a uno?  'se llama al modelo que es un array'

   //para traer un solo dato
   nombreCompleto: string = '';

   //banner background fixed
   bannerEducacion: string = '';

   //datos: tambien es un alias, nombrar como querramos
   constructor(private datos: DatosService) { }

   //this 'datos' es el datos de la linea 21, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
   ngOnInit(): void {
     this.datos.getDatos().subscribe(data => {
       this.estudiosTodos = data.estudios,
         this.nombreCompleto = data.nombreyapellido,   //si quisieramos traer solo el nombre
         this.bannerEducacion = `url(${data.bannerEducacion})`   //background imagen
     });

   }

 }




*/