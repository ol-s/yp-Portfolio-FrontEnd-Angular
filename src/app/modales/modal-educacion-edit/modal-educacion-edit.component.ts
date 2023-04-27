//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion-edit',
  templateUrl: './modal-educacion-edit.component.html',
  styleUrls: ['./modal-educacion-edit.component.css']
})
export class ModalEducacionEditComponent implements OnInit {

  eduForm: FormGroup;
  educacion: Educacion[] = [];
  estudio: any;
  id?: number;

  constructor(
    private eduServ: EducacionService,
    private formBuilder: FormBuilder ) {

    this.eduForm = this.formBuilder.group({
      id: [''],
      logoInstitucion: ['', [Validators.required]],
      logoAlt: [''],
      anioeInstitucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['']
    })
  }

  //metodos p formularios reactivos
  get Logo() { return this.eduForm.get("logoInstitucion");}
  //get Alt() { return this.eduForm.get("logoAlt");}
  get AnioeInstitucion() { return this.eduForm.get("anioeInstitucion");}
  get Titulo() { return this.eduForm.get("titulo");}
  get Descripcion() { return this.eduForm.get("descripcion");}


  ngOnInit(): void {
    this.listaEstud();
  }

  listaEstud(): void {
    this.eduServ.listaEstudios().subscribe({
      next: (data) => {
        this.educacion = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findEstud(id: number) {
    this.eduServ.findEstudio(id).subscribe({
      next: (data) => {
        this.eduForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log('Estudio id = ' + id);
  }

  saveEstud() {
    let estudio = this.eduForm.value;
    if (estudio.id == '') {
      this.eduServ.saveEducacion(estudio).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Estudio creado ✔️");
    } else {
      this.eduServ.updateEstudio(estudio.id, estudio).subscribe({   
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Estudio editado ✔️");
    }
  }

  deleteEstud(id: number) {
    if (confirm("¿Querés eliminar este estudio? ❗❗")) {
      this.eduServ.deleteEstudio(id).subscribe(data => { });
      window.location.reload();
      alert("Estudio eliminado ✔️");
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.eduForm.reset();
  }

}

