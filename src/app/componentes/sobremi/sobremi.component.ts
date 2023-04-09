///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                      
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];

  //bannerAvatar: string = '';

  //persoserv es mi alias
  constructor(private persoServ: PersonaService) { }


  ngOnInit(): void {  
    this.cargarPersona();
  }

  
  //this. es para utilizar una variable que esta fuera del metodo, si le pasara id entre los parenteiss, abajo no pondria 'this.' ,,,express 18, min 38'
  //solo este metodo hacemos?? y el new/find/update/delete?..en el servicio! 
  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  }





  //----tendria que poner delete nomas, pero habria q cambiar todo en el back...//////IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deletePersona(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) {        
      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      //PRENDO NOMAS, DA PROBLEMAS sin las dos alertas,,,ya les puse emojis so dejar asi
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
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  /*seccionsobremi: any;
  cv: string = '';  //para traer un solo dato
  sobremi: string = '';
  experiencias: string = '';

  //banner background fixed
  

  personaItems: any = [];
  bannerAvatar: string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 20, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      //this.seccionsobremi = data.any,
      //this.sobremi = data.sobremi,
      //this.experiencias = data.experiencias,
      //this.cv = data.cv,   //si quisieramos traer solo el cv desde el json, quedaron con el mismo nombre aca y el el json
      this.personaItems = data.persona

      //this.bannerEntrada= "https://static.eldiario.es/clip/b75933f3-8399-4ddd-85ee-d73c86314089_16-9-discover-aspect-ratio_default_0.jpg";
      
      //THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
      this.bannerAvatar = `url(${data.persona})`   // background imagen



    });
  }
}

*/
// DomSanitizer-VERRRRR SI HAY PROBLEMAS
// https://stackoverflow.com/questions/34875426/how-to-add-background-image-using-ngstyle-angular2













/*
/////////////////////////////////////////////////////////////////////////CON JSON VIEJO//////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  seccionsobremi: any;
  cv: string = '';  //para traer un solo dato
  sobremi: string = '';
  experiencias: string = '';

  //banner background fixed
  bannerAvatar: string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 20, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.seccionsobremi = data.any,
        this.sobremi = data.sobremi,
        this.experiencias = data.experiencias,
        this.cv = data.cv,   //si quisieramos traer solo el cv desde el json, quedaron con el mismo nombre aca y el el json
        this.bannerAvatar = `url(${data.bannerAvatar})`   // background imagen
    });
  }
}
*/

// DomSanitizer-VERRRRR SI HAY PROBLEMAS
// https://stackoverflow.com/questions/34875426/how-to-add-background-image-using-ngstyle-angular2

