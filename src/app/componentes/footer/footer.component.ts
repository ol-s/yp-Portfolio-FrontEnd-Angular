import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  id?: number;
  persoForm: FormGroup;
  persona: Persona[] = [];
  personaItems: any;
  bannerSalida: string = '';

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

      bannerEntrada: [''],
      bannerAvatar: [''],
      bannerEducacion: [''],
      bannerSalida: [''],

      subtitulo1: [''],
      subtitulo2: [''],

      servicios1: ['', [Validators.required]],
      servicios2: ['', [Validators.required]],
      salida1: ['', [Validators.required]],
      salida2: ['', [Validators.required]],
      copyrights: ['', [Validators.required]],
      logoBrand: ['']
    })
  }

  /*get NombrePersona() { return this.persoForm.get("nombre"); }
  get ApellidoPersona() { return this.persoForm.get("apellido"); }
  get Ocupacion() { return this.persoForm.get("ocupacion"); }
  get Sobremi() { return this.persoForm.get("sobremi"); }
  get ExperienciasTexto() { return this.persoForm.get("experienciasTexto"); }
  get BannerEntrada() { return this.persoForm.get("bannerEntrada"); }
  get BannerAvatar() { return this.persoForm.get("bannerAvatar"); }
  get BannerEducacion() { return this.persoForm.get("bannerEducacion"); }
  get BannerSalida() { return this.persoForm.get("bannerSalida"); }
  /*get Subtitulo1() { return this.persoForm.get("subtitulo1"); }
  get Subtitulo2() { return this.persoForm.get("subtitulo2"); }*/
  get Servicios1() { return this.persoForm.get("servicios1"); }
  get Servicios2() { return this.persoForm.get("servicios2"); }
  get Salida1() { return this.persoForm.get("salida1"); }
  get Salida2() { return this.persoForm.get("salida2"); }
  get Copyrights() { return this.persoForm.get("copyrights"); }
  //get LogoBrand() { return this.persoForm.get("copyrights"); }


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













///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                      
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];
  //no hace falta    bannerAvatar: string = '';

  constructor(private persoServ: PersonaService) { }

  ngOnInit(): void {  
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  }




  //delete///////////////////IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deletePersona(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) { 

      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
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
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  personaItems: any = [];

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.personaItems = data.persona
    });
  }
}
*/














////////////////////////////////VIEJO JSON, tambien andaba pero suelto, no dentro de persona//////////////////////////////////////////////

/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  saludojson: string = '';
  servicios1: string = '';
  servicios2: string = '';
  descripcion: string = '';
  salida: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.servicios1 = data.servicios1,
        this.servicios2 = data.servicios2,
        this.descripcion = data.descripcion,
        this.salida = data.salida
    });

  }



}
*/