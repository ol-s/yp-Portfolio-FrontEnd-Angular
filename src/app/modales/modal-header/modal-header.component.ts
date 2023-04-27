import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
//importo redes en el modal header para editar el 'red-component' dentro del modal header
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {

  id?: number;

  persoForm: FormGroup;
  redForm: FormGroup;

  red: Red[] = [];
  redesTodas: any = [];

  persona: Persona[] = [];
  personaItems: any;

  constructor(
    private redServ: RedService,
    private persoServ: PersonaService,
    private formBuilder: FormBuilder
  ) {

    this.persoForm = this.formBuilder.group({

      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],

      sobremi: [''],
      experienciasTexto: [''],
      cv: [''],
      email: [''],
      clave: [''],

      bannerEntrada: [''],
      bannerAvatar: [''],
      bannerEducacion: [''],
      bannerSalida: [''],

      subtitulo1: ['', [Validators.required]], //para link brand
      subtitulo2: [''],

      servicios1: [''],
      servicios2: [''],
      salida1: [''],
      salida2: [''],
      copyrights: [''],
      logoBrand: ['', [Validators.required]]

    }),

      this.redForm = this.formBuilder.group({
        id: [''],
        nombre: [''],
        url: ['', [Validators.required]],
        iconred: ['', [Validators.required]],
      })

  }

  
  //metodos p los form. en persona activo solo los que uso en este form
  get Red() { return this.redForm.get("url"); }
  get Icono() { return this.redForm.get("iconred"); }
  // get NombreValid() {return this.Nombre?.touched && !this.Nombre?.valid;}
  // get PorcentajeValid() {return this.Porcentaje?.touched && !this.Porcentaje?.valid;}

  get NombrePersona() { return this.persoForm.get("nombre"); }
  get ApellidoPersona() { return this.persoForm.get("apellido"); }
  get Ocupacion() { return this.persoForm.get("ocupacion"); }
  /*get Sobremi() { return this.persoForm.get("sobremi"); }
  get ExperienciasTexto() { return this.persoForm.get("experienciasTexto"); }
  get Cv() { return this.persoForm.get("cv"); }
  get Email() { return this.persoForm.get("email"); }
  get BannerEntrada() { return this.persoForm.get("bannerEntrada"); }
  get BannerAvatar() { return this.persoForm.get("bannerAvatar"); }
  get BannerEducacion() { return this.persoForm.get("bannerEducacion"); }
  get BannerSalida() { return this.persoForm.get("bannerSalida"); }*/
  get Subtitulo1() { return this.persoForm.get("subtitulo1"); }
  /*get Subtitulo2() { return this.persoForm.get("subtitulo2"); }
  get Servicios1() { return this.persoForm.get("servicios1"); }
  get Servicios2() { return this.persoForm.get("servicios2"); }
  get Salida1() { return this.persoForm.get("salida1"); }
  get Salida2() { return this.persoForm.get("salida2"); }
  get Copyrights() { return this.persoForm.get("copyrights"); }*/
  get LogoBrand() { return this.persoForm.get("logoBrand"); }


  ngOnInit(): void {
    this.listaP();
    this.listaRedes();
  }

  //persona------------------------------------------------------
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



  //redes-------------------------------------------------------
  listaRedes(): void {
    this.redServ.listaRedes().subscribe({
      next: (data) => {
        this.redesTodas = data;
        //console.log('Redes cargadas correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findRed(id: number) {
    this.redServ.findRed(id).subscribe({
      next: (data) => {
        this.redForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log('Red id ' + id);
  }

  saveRed() {
    let redesTodas = this.redForm.value;
    if (redesTodas.id == '') {
      this.redServ.saveRed(redesTodas).subscribe({
        next: (data) => {
          this.limpiarR();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Red agregada ✔️");
      //alert("¡Red agregada! ✔️, click en 'Aceptar' para recargar la página.");
    } else {
      this.redServ.updateRed(redesTodas.id, redesTodas).subscribe({
        next: (data) => {
          this.limpiarR();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Red editada ✔️");
    }
  }

  deleteRed(id: number) {
    if (confirm("¿Querés eliminar esta red? ❗❗")) {
      this.redServ.deleteRed(id).subscribe(data => { });
      window.location.reload();
      alert("Red eliminada ✔️");
    }
  }

  limpiarR(): void {
    this.redForm.reset();
  }

}

