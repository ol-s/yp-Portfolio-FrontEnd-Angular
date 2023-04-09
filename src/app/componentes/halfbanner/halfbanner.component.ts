///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                      
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-halfbanner',
  templateUrl: './halfbanner.component.html',
  styleUrls: ['./halfbanner.component.css']
})
export class HalfbannerComponent implements OnInit { 

  persona: Persona[] = [];
  personaItems: any = [];

  bannerAvatar: string = '';

  constructor(private persoServ: PersonaService) { }


  ngOnInit(): void {  
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  }





  //IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deletePersona(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) { 
             
      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
    }
  }

}







////////////////////////////////////CON JSON NUEVO ENTIDAD PERSONA//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 9-4-23///////////////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////
/*

import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import {BrowserModule, DomSanitizer, SafeStyle} from '@angular/platform-browser'

@Component({
  selector: 'app-halfbanner',
  templateUrl: './halfbanner.component.html',
  styleUrls: ['./halfbanner.component.css']
})
export class HalfbannerComponent implements OnInit {              

  //banner background fixed
  //persona: any;
  //bannerEntrada: string = '';
  //personaItem : any =[];

  //persona: any = [];
  //estudios: Educacion[] = [];

  //public bannerEntrada: SafeStyle | undefined;
  //url: string = '';



  //banner: string = '';

  //personaItems : any =[];
  


 //persona:persona;


  personaItems: any = [];
  bannerEntrada: string = '';


  
  constructor(private datos: DatosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {


        //this.personaItems = data.persona,   
       //this.persona = data.persona

       //this.persona = data,
        //this.bannerEntrada = `url(${data.bannerEntrada})`   //background imagen

        //this.bannerEntrada = `url(${this.bannerEntrada.persona})`,  
        //this.bannerEntrada = DomSanitizer.bypassSecurityTrustStyle('url(http://www.freephotos.se/images/photos_medium/white-flower-4.jpg)');
        //this.bannerEntrada = this.sanitizer.bypassSecurityTrustStyle('url(' + data.persona + ')');
        //this.bannerEntrada = `url(${this.bannerEntrada})`

        //this.bannerEntrada = this.persona[7],


        ///////////////////////////////////////////////////////////////////////////
        //this.bannerEntrada= "https://static.eldiario.es/clip/b75933f3-8399-4ddd-85ee-d73c86314089_16-9-discover-aspect-ratio_default_0.jpg";
        //ni cragando la fuking url aca carga, o seaaaaaaa.
        //CARGO ESTA IMAGEN ONLIneeeee CON  <div class="banner1" [style.background-image]="'url(' + bannerEntrada + ')'">    
        //,,ESTOY ACCEDIENDO MAL AL DATO
        ///////////////////////////////////////////////////////////

        //no carga
        //this.bannerEntrada = `url(${data.persona.bannerEntrada})`


        //this.bannerEntrada = `url(${data.persona.bannerEntrada})`,


        //this.personaItems = data.persona;

        //this.bannerEntrada = `url(${data.persona})`;
        //nada andaaaaaaaaaaaaaaaaaaaaaaaa this.bannerEntrada = `${data.persona}`;

        // dejoooooooooooooooooooooooooooooooooooooooooooooooooooo  this.bannerEntrada = this.persona[7].bannerEntrada
       


        //88
        //this.banner = `url(${data.persona.bannerEntrada})`

        //89
        //this.banner = this.persona.bannerEntrada;

        //89
       //this.bannerEntrada = data.persona;

        //90  DIA DOS NADAAAAAAAAAAAAAAAA ANDAAAAAAAAAAAAAAAAAAAAAAAAAA
        //this.banner = `url(${data.persona})`


        this.personaItems = data.persona

        //this.bannerEntrada= "https://static.eldiario.es/clip/b75933f3-8399-4ddd-85ee-d73c86314089_16-9-discover-aspect-ratio_default_0.jpg";
        
        //THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
        this.bannerEntrada = `url(${data.persona})`


    });

  }
}


*/




















//////////////////VIEJO JSON///////////andaba////////////// fuera de un array, ahora metiendolo dentro de persona NO ANDAAA///////////////////
/*

import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-halfbanner',
  templateUrl: './halfbanner.component.html',
  styleUrls: ['./halfbanner.component.css']
})
export class HalfbannerComponent implements OnInit {              

  //banner background fixed
  bannerEntrada: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
        this.bannerEntrada = `url(${data.bannerEntrada})`   //background imagen
    });

  }
}
*/
