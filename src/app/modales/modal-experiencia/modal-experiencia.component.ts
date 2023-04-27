import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
//import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent {

  id?: number;
  expForm: FormGroup; 
  experiencia: Experiencia[] = [];
  expTodas: any = [];

  //para ver botones edit when logueado  19-4-23
  personaLog: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);
  modoEdit: any;


  constructor(
    //private persoServ: PersonaService,
    private formBuilder: FormBuilder,
    private expServ: ExperienciaService) {

    this.expForm = this.formBuilder.group({
      id: [''],
      rubro: [''],
      logoLugar: [''],
      lugar: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    })
  }

  get Logo() { return this.expForm.get("logoLugar"); }
  get Lugar() { return this.expForm.get("lugar"); }
  get Puesto() { return this.expForm.get("puesto"); }
  get Descr() { return this.expForm.get("descripcion"); }
  get Inicio() { return this.expForm.get("fechaInicio"); }
  get Fin() { return this.expForm.get("fechaFin"); }
  


  ngOnInit(): void {
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

  listaExperiencias(): void {
    this.expServ.listaExp().subscribe({
      next: (data) => {
        this.expTodas = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findExp(id: number) {
    this.expServ.findExperiencia(id).subscribe({
      next: (data) => {
        this.expForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    console.log('Exp id ' + id);
  }

  saveExp() {
    let personaItems = this.expForm.value;
    if (personaItems.id == '') {
      this.expServ.saveExperiencia(personaItems).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Experiencia creada ✔️"); 
    } else {
      this.expServ.updateExperiencia(personaItems.id, personaItems).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Experiencia editada ✔️");
    }
  }

  deleteExp(id: number) {
    if (confirm("¿Querés eliminar esta experiencia? ❗❗")) {
      this.expServ.deleteExperiencia(id).subscribe(data => { });
      window.location.reload();
      alert("Experiencia eliminada ✔️");
    }
  }


  //limpiar form
  limpiar(): void {
    this.expForm.reset();
  }



}