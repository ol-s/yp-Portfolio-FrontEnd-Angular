import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillWeb } from 'src/app/model/skill-web';
import { SkillWebService } from 'src/app/servicios/skill-web.service';

@Component({
  selector: 'app-modal-skill-web-edit',
  templateUrl: './modal-skill-web-edit.component.html',
  styleUrls: ['./modal-skill-web-edit.component.css']
})
export class ModalSkillWebEditComponent {

  swForm: FormGroup;
  skillWeb: SkillWeb[] = [];
  progrSkill: any;
  id?: number;

  nombre: string = '';  //sin esto me da error el ngmodel en el html, dice angular  no hay q usar igual, captura los datos solo con formcontrolname?
  porcentaje: string = '';//probar sacarlo igual,  A VER SI ANDA IGUAL

  constructor(
    private swServ: SkillWebService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {

    this.swForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }


  //metodos p formularios reactivos

  //pruebo editar id  //me esta creando nuevos no editando, cuando quise cambiar id
  // get Id() {
  //   return this.swForm.get("id");
  // }
  get Nombre() {
    return this.swForm.get("nombre");
  }
  get Porcentaje() {
    return this.swForm.get("porcentaje");
  }


  ngOnInit(): void {
    this.listaSw();
  }

  listaSw(): void {
    this.swServ.listaSkillsW().subscribe({
      next: (data) => {
        this.skillWeb = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findSw(id: number) {
    this.swServ.findSkillW(id).subscribe({
      next: (data) => {
        this.swForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log(id);
  }

  saveSw() {
    let progrSkill = this.swForm.value;
    if (progrSkill.id == '') {
      this.swServ.saveSkillW(progrSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill creada ✔️");
    } else {
      this.swServ.updateSkillW(progrSkill.id, progrSkill).subscribe({   
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill editada ✔️");
    }
  }

  deleteSw(id: number) {
    if (confirm("¿Querés eliminar ésta skill? ❗❗")) {
      this.swServ.deleteSkillW(id).subscribe(data => { });
      window.location.reload();
      alert("Skill eliminada ✔️"); //si saco el alert no se elimina,,,,ok se elimino la segunda vez que le di eliminar,,,ahora anda, dejo el alert igual
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.swForm.reset();
  }

}