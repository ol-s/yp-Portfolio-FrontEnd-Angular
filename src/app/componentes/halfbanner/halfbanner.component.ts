///////////////////////////////////////////poniendo form en el component inicial a ver si me trae los datos al primer click, ANDUVO!
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-halfbanner',
  templateUrl: './halfbanner.component.html',
  styleUrls: ['./halfbanner.component.css']
})
export class HalfbannerComponent implements OnInit { 

  id?: number;
  persoForm: FormGroup;
  persona: Persona[] = [];
  personaItems: any;
  bannerAvatar: string = '';

  constructor(private persoServ: PersonaService, private formBuilder: FormBuilder) {
    this.persoForm = this.formBuilder.group({

      id: [''],
      nombre: [''],
      apellido: [''],
      ocupacion: [''],

      sobremi: [''],
      experienciasTexto: [''],
      cv: [''],
      email: [''],
//ver si apago el resto anda igual , en este form solo cargo estos 4, 
//NOPE, NO TRAE LOS DATOS SI APAGAS, TIENEN QUE ESTAR TODOS ACA, YO VALIDATORS LES PONGO SOLO A LOS QUE INCLUYO EN ESTE FORMULARIO
      bannerEntrada: ['', [Validators.required]],
      bannerAvatar:['', [Validators.required]],
      bannerEducacion: ['', [Validators.required]],
      bannerSalida: ['', [Validators.required]],

      subtitulo1: [''],
      subtitulo2: [''],

      servicios1: [''],
      servicios2: [''],
      salida1: [''],
      salida2: [''],
      copyrights: [''],
      logoBrand: ['']

    })
  }

  /*get NombrePersona() { return this.persoForm.get("nombre"); }
  get ApellidoPersona() { return this.persoForm.get("apellido"); }
  get Ocupacion() { return this.persoForm.get("ocupacion"); }
  get Sobremi() { return this.persoForm.get("sobremi"); }
  get ExperienciasTexto() { return this.persoForm.get("experienciasTexto"); }*/
  get BannerEntrada() { return this.persoForm.get("bannerEntrada"); }
  get BannerAvatar() { return this.persoForm.get("bannerAvatar"); }
  get BannerEducacion() { return this.persoForm.get("bannerEducacion"); }
  get BannerSalida() { return this.persoForm.get("bannerSalida"); }
  /*get Subtitulo1() { return this.persoForm.get("subtitulo1"); }
  get Subtitulo2() { return this.persoForm.get("subtitulo2"); }
  get Servicios1() { return this.persoForm.get("servicios1"); }
  get Servicios2() { return this.persoForm.get("servicios2"); }
  get Salida1() { return this.persoForm.get("salida1"); }
  get Salida2() { return this.persoForm.get("salida2"); }
  get Copyrights() { return this.persoForm.get("copyrights"); }
  get LogoBrand() { return this.persoForm.get("copyrights"); }*/


  ngOnInit(): void {
    this.listaP();
  }

  // cargarPersona(): void {
  //   this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  // }
  //PERSONA***********************************************************
   listaP(): void {
     this.persoServ.listaPersonas().subscribe({
       next: (data) => {
         this.personaItems = data;
         console.log('Items cargados correctamente');
       },
       error: (e) => console.error(e),
       //complete: () => console.info('Completado')
     })
   }

  findPers(id: number) {
    this.persoServ.findPersona(id).subscribe({
      next: (data) => {
        this.persoForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    console.log('Persona id ' + id);
  }

  savePers() {
    let personaItems = this.persoForm.value;
    if (personaItems.id == '') {
      this.persoServ.savePersona(personaItems).subscribe({
        next: (data) => {
          this.limpiarP();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      //alert("Usuario creado ✔️"); //solo un usuario por ahora
    } else {
      this.persoServ.updatePersona(personaItems.id, personaItems).subscribe({
        next: (data) => {
          this.limpiarP();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Editado correctamente ✔️");
    }
  }

  //limpiar form
  limpiarP(): void {
    this.persoForm.reset();
  }


}





////////////////////////////////////////////********************************original sin form adentro 15-4-23
///////////////////////////////////////////estoy tratando que me traiga los datos al primer click

///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
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
    
  }*/
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








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
