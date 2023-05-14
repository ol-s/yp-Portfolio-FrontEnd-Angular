import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicios/skill-soft.service';

@Component({
  selector: 'app-modal-skill-soft-edit',
  templateUrl: './modal-skill-soft-edit.component.html',
  styleUrls: ['./modal-skill-soft-edit.component.css']
})
export class ModalSkillSoftEditComponent {

  ssForm: FormGroup;
  skillSoft: SkillSoft[] = [];
  softSkill: any;
  id?: number;

  constructor(
    private ssServ: SkillSoftService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {

    this.ssForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }


  //metodos p formularios reactivos
  get Nombre() {
    return this.ssForm.get("nombre");
  }
  get Porcentaje() {
    return this.ssForm.get("porcentaje");
  }

  
  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  get PorcentajeValid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }


  ngOnInit(): void {
    this.listaSs();
  }

  listaSs(): void {
    this.ssServ.listaSkillsS().subscribe({
      next: (data) => {
        this.skillSoft = data;
        //console.log('Items cargados correctamente');
      },
      //error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findSs(id: number) {
    this.ssServ.findSkillS(id).subscribe({
      next: (data) => {
        this.ssForm.setValue(data);
      },
      //error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log('skill id = ' + id);
  }

  saveSs() {
    let softSkill = this.ssForm.value;
    if (softSkill.id == '') {
      this.ssServ.saveSkillS(softSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        //error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill creada ✔️");
    } else {
      this.ssServ.updateSkillS(softSkill.id, softSkill).subscribe({   
        next: (data) => {
          this.limpiar();
        },
        //error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill editada ✔️");
    }
  }

  deleteSs(id: number) {
    if (confirm("¿Querés eliminar esta skill? ❗❗")) {
      this.ssServ.deleteSkillS(id).subscribe(data => { });
      window.location.reload();
      alert("Skill eliminada ✔️");
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.ssForm.reset();
  }


}