import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicios/skill-soft.service';

@Component({
  selector: 'app-modal-skill-soft-add',
  templateUrl: './modal-skill-soft-add.component.html',
  styleUrls: ['./modal-skill-soft-add.component.css']
})
export class ModalSkillSoftAddComponent {

  form: FormGroup;

  nombre: string = '';
  porcentaje: string = '';

  constructor(private formBuilder: FormBuilder, private ssServ: SkillSoftService) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }

  ngOnInit() { }

  // metodos para el formulario
  get Skill() {
    return this.form.get("nombre");
  }
  get Porc() {
    return this.form.get("porcentaje");
  }

   //parece que no se usan (?)
   /*get SkillValid() {
     return this.Skill?.touched && !this.Skill?.valid;  
   }
   get PorcValid() {
     return this.Porc?.touched && !this.Porc?.valid;  
   }*/


  limpiar(): void {
    this.form.reset();
  }

  onCreate(): void {
    const sSoft = new SkillSoft(
      this.nombre,
      this.porcentaje,);

    this.ssServ.saveSkillS(sSoft).subscribe(data => {
      alert("esta alerta no sale, pero dejar vacia porque necesita 2 creo para andar bien, probar")
      window.location.reload();  //se recarga la pagina
    });
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
      //alert("¡Skill agregada! ✔, click en 'Aceptar' para recargar la página."); no se ve verde en firefox
      alert("¡Skill agregada! ✔️, click en 'Aceptar' para recargar la página.");
      window.location.reload();
    } else {
      alert("¡Falló la carga de datos! ❌, intente nuevamente.");
      this.form.markAllAsTouched();
    }
  }

}