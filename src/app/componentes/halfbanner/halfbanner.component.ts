//form en el component inicial para traer los datos al primer click
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//para ocultar botones edit when no logueado
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

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
 
//para ver botones edit when logueado  19-4-23
  personaLog: Persona= new Persona("", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", );
  modoEdit: any;

  constructor(private persoServ: PersonaService, private formBuilder: FormBuilder, autenticacionServ: AutenticacionService) {
    this.persoForm = this.formBuilder.group({

      //poner todos los campos de la tabla para que traiga los datos, validators le pongo solo a los que uso en este formulario
      id: [''],
      nombre: [''],
      apellido: [''],
      ocupacion: [''],

      sobremi: [''],
      experienciasTexto: [''],
      cv: [''],
      email: [''],
      clave: [''], //p login 19-4-23

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

    //para ver botones edit when logueado  19-4-23
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
  }

  // cargarPersona(): void {this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });}

   listaP(): void {
     this.persoServ.listaPersonas().subscribe({
       next: (data) => {
         this.personaItems = data;
         //console.log('Items cargados correctamente');
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





//original sin 'form' dentro. integrado al back 9-4-23
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



  


//json nuevo angular, hasta 9-4-23
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

  personaItems: any = [];
  bannerEntrada: string = '';
  
  constructor(private datos: DatosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {

        this.bannerEntrada = `url(${data.persona})`

    });

  }
}

*/





//////////////////VIEJO JSON///////////andaba////////////suelto, no dentro de una tabla
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
