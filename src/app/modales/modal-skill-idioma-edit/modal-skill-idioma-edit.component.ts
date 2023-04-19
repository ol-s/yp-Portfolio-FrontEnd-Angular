import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skillidioma } from 'src/app/model/skill-idioma';
import { SkillIdiomaService } from 'src/app/servicios/skill-idioma.service';

@Component({
  selector: 'app-modal-skill-idioma-edit',
  templateUrl: './modal-skill-idioma-edit.component.html',
  styleUrls: ['./modal-skill-idioma-edit.component.css']
})
export class ModalSkillIdiomaEditComponent {

  siForm: FormGroup;
  skillidioma: Skillidioma[] = [];
  idiomaSkill: any;
  id?: number;

  nombre: string = '';  //sin esto me da error el ngmodel en el html, dice angular  no hay q usar igual, captura los datos solo con formcontrolname?
  porcentaje: string = '';//probar sacarlo igual,  A VER SI ANDA IGUAL

  constructor(
    private siServ: SkillIdiomaService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {

    this.siForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }


  //metodos p formularios reactivos
  get Nombre() {
    return this.siForm.get("nombre");
  }
  get Porcentaje() {
    return this.siForm.get("porcentaje");
  }


  ngOnInit(): void {
    this.listaSi();
  }

  listaSi(): void {
    this.siServ.listaSkillsD().subscribe({
      next: (data) => {
        this.skillidioma = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findSi(id: number) {
    this.siServ.findSkillD(id).subscribe({
      next: (data) => {
        this.siForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log('Skill id = ' + id);
  }

  saveSi() {
    let idiomaSkill = this.siForm.value;
    if (idiomaSkill.id == '') {
      this.siServ.saveSkillD(idiomaSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill creada ✔️");
    } else {
      this.siServ.updateSkillD(idiomaSkill.id, idiomaSkill).subscribe({   
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

  deleteSi(id: number) {
    if (confirm("¿Querés eliminar esta skill? ❗❗")) {
      this.siServ.deleteSkillD(id).subscribe(data => { });
      window.location.reload();
      alert("Skill eliminada ✔️");
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.siForm.reset();
  }

}
