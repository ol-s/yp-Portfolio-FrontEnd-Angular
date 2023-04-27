import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';


@Component({
  selector: 'app-modal-skill-arq-edit',
  templateUrl: './modal-skill-arq-edit.component.html',
  styleUrls: ['./modal-skill-arq-edit.component.css']
})

export class ModalSkillArqEditComponent {

  saForm: FormGroup;
  skillArq: SkillArq[] = [];
  arquiSkill: any;
  id?: number;

  constructor(
    private saServ: SkillArqService,
    private formBuilder: FormBuilder,
    //private httpClient: HttpClient, 
    //private router: Router
  ) {
    this.saForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],

    })
  }

  //metodos p formularios reactivos
  get Nombre() { return this.saForm.get("nombre"); }
  //get NombreValid() { return this.Nombre?.touched && !this.Nombre?.valid; }

  get Porcentaje() { return this.saForm.get("porcentaje"); }
  //get PorcentajeValid() { return this.Porcentaje?.touched && !this.Porcentaje?.valid; }


  ngOnInit(): void {
    this.listaSkillsArq();
  }

  listaSkillsArq(): void {
    this.saServ.listaSkillsA().subscribe({
      next: (data) => {
        this.skillArq = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findSkillArq(id: number) {
    this.saServ.findSkillA(id).subscribe({
      next: (data) => {
        this.saForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Estudios cargados correctamente");
    console.log("Skill id = " + id);
  }

  saveSkillArq() {
    let arquiSkill = this.saForm.value;
    if (arquiSkill.id == '') {
      this.saServ.saveSkillA(arquiSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill creada ✔️");
    } else {
      this.saServ.updateSkillA(arquiSkill.id, arquiSkill).subscribe({
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

  deleteSkillArq(id: number) {
    if (confirm("Querés eliminar esta skill? ❗❗")) {
      this.saServ.deleteSkillA(id).subscribe(data => { });
      window.location.reload();
      alert("Skill eliminada ✔️");
    }
  }


  limpiar(): void {
    this.saForm.reset();
  }


}

