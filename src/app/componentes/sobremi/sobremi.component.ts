


///////////////////////////////////////////poniendo form en el component inicial a ver si me trae los datos al primer click, ANDUVO!
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent implements OnInit {

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

      sobremi: ['', [Validators.required]],

      //NO LO HAGO REQUERIDO PARA pODERINSERTAR DESDE COMPONENTE EXPERIENCIASVACIO? EL TITULO ESTA FIJO THO :/ le pongo un plus al final to add
      experienciasTexto: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      email: [''],

      bannerEntrada: [''],
      bannerAvatar: [''],
      bannerEducacion: [''],
      bannerSalida: [''],

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
  get Ocupacion() { return this.persoForm.get("ocupacion"); }*/
  get Sobremi() { return this.persoForm.get("sobremi"); }
  get ExperienciasTexto() { return this.persoForm.get("experienciasTexto"); }
  get Cv() { return this.persoForm.get("cv"); }
  /*get BannerEntrada() { return this.persoForm.get("bannerEntrada"); }
  get BannerAvatar() { return this.persoForm.get("bannerAvatar"); }
  get BannerEducacion() { return this.persoForm.get("bannerEducacion"); }
  get BannerSalida() { return this.persoForm.get("bannerSalida"); }
  get Subtitulo1() { return this.persoForm.get("subtitulo1"); }
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









///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* //BEFORE TRAER COMPLETO PARA EDITAR EN UN SOLO CLICK 15-4-23
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

}*/





















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

