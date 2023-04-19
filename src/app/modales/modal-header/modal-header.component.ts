import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
//importo redes en el modal header para editar el 'red-component' dentro del modal
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//solo por el limpiar() cos no validators here (?),,,lo saque nomas, error en ''form'' 

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


  nombre: string = '';  //sin esto me da error el ngmodel en el html, dice angular  no hay q usar igual, captura los datos solo con formcontrolname?
  apellido: string = '';//probar sacarlo igual,  A VER SI ANDA IGUAL,,en whatsapp lo ponian con databinding,ANDAN SIN NGMODEL
  ocupacion: string = '';//sacar todo esto, NO VA EL NGMODEL

  constructor(
    private redServ: RedService,
    private persoServ: PersonaService,
    private formBuilder: FormBuilder
    // private httpClient: HttpClient,
    // private router: Router//era para navegar dentro de la pag, volver atras desde el modal, saque
  ) {

    this.persoForm = this.formBuilder.group({

      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],//voy probando de a uno, antes no meguardaba cos una enieee en disenio y arq'' unSTRING era!!

      sobremi: [''],
      experienciasTexto: [''],
      cv: [''],
      email: [''],

      bannerEntrada: [''],
      bannerAvatar: [''],
      bannerEducacion: [''],
      bannerSalida: [''],

      subtitulo1: ['', [Validators.required]],
      subtitulo2: [''],

      servicios1: [''],
      servicios2: [''],
      salida1: [''],
      salida2: [''],
      copyrights: [''],
      logoBrand: ['', [Validators.required]]

    }),

      //NO SE SI PUEDO PONER DOS A LA VEZ? PROBEMOS
      this.redForm = this.formBuilder.group({
        id: [''],
        nombre: [''],
        url: ['', [Validators.required]],
        iconred: ['', [Validators.required]],
      })

  }


  //metodos p formularios reactivos 
  //hago todo junto aca cos igual tengo que poner todos los metodos de redes aca adentro para que no de error el find/delete en el modal header html
  get Red() { return this.redForm.get("url");}
  get Icono() { return this.redForm.get("iconred");}
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

  
  /*
  //no quiero delete nada so
  deleteP(id: number) {
    if (confirm("¿Querés eliminar este usuario? ❗❗")) {
      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      alert("Eliminado ✔️");
    }
  }*/




  //REDES**********************************************************************
  // listaRedes(): void {
  //   this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });}

  listaRedes(): void {
    this.redServ.listaRedes().subscribe({
      next: (data) => {
        this.redesTodas = data;
        console.log('Redes cargadas correctamente');
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
        complete: () => console.info('Completado')
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













/*  ////ESTABA ASI ANTES DE INTENTAR QuE FUNCIONE EL EDIT

import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
//importo redes en el modal para editar el 'red-component' dentro del modal
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//solo por el limpiar() cos no validators here (?),,,lo saque nomas, error en ''form'' 


@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {

  red: Red[] = [];
  redesTodas: any = [];

  constructor(private redServ: RedService) { }

  ngOnInit(): void {
    this.cargarRed(); //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA
  }

  cargarRed(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });

  }


  //para limpiar el form, ,,,lo saque nomas, error en ''form'' 
  /*limpiar(): void {
    this.form.reset();
  }

  //delete dentro del html (boton click delete) del modal header
  deleteRed(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar esta red? ")) {
      this.redServ.deleteRed(id).subscribe(data => { });
      window.location.reload();

      alert("Red eliminada ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

}*/