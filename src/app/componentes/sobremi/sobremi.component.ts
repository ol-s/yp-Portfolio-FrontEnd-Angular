//con form en el componente inicial para traer los datos editables ya al primer modal
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

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

  //para ver botones edit when logueado  19-4-23
  personaLog: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);
  modoEdit: any;


  //traigo experiencias dentro del sobremi component
  experiencia: Experiencia[] = [];
  expTodas: any = [];

  constructor(
    private persoServ: PersonaService,
    private formBuilder: FormBuilder,
    private expServ: ExperienciaService) {

    this.persoForm = this.formBuilder.group({

      id: [''],
      nombre: [''],
      apellido: [''],
      ocupacion: [''],

      sobremi: ['', [Validators.required]],
      experienciasTexto: ['', [Validators.required]], //plus boton edit/add more
      cv: ['', [Validators.required]],

      email: [''],
      clave: [''],

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
    this.listaExperiencias();

    //para ver botones edit when logueado  21-4-23
    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }

  }

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
        //error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      //alert("Usuario creado ✔️"); //solo un usuario por ahora
    } else {
      this.persoServ.updatePersona(personaItems.id, personaItems).subscribe({
        next: (data) => {
          this.limpiarP();
        },
        //error: (e) => console.error(e),
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



  //exp----------------solo la lista, add/edit/delete en modal-experiencia-------------
  listaExperiencias(): void {
    this.expServ.listaExp().subscribe({
      next: (data) => {
        this.expTodas = data;
        //console.log('Items cargados correctamente');
      },
      //error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }


}













//json angular hasta 9-4-23
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

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {

      this.bannerAvatar = `url(${data.persona})`   // background imagen

    });
  }
}

*/
