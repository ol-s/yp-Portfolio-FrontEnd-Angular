import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillWeb } from 'src/app/model/skill-web';
import { SkillWebService } from 'src/app/servicios/skill-web.service';

@Component({
  selector: 'app-modal-skill-web-add',
  templateUrl: './modal-skill-web-add.component.html',
  styleUrls: ['./modal-skill-web-add.component.css']
})
export class ModalSkillWebAddComponent {

  form: FormGroup;

  nombre: string = '';
  porcentaje: string = '';

  constructor(private formBuilder: FormBuilder, private swServ: SkillWebService) {

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


  //para limpiar el form
  limpiar(): void {
    this.form.reset();
  }

  onCreate(): void {
    const sWeb = new SkillWeb(
      this.nombre,
      this.porcentaje,);

    this.swServ.saveSkillW(sWeb).subscribe(data => {
      alert("esta alerta no sale, pero dejar vacia porque necesita 2 creo para andar bien, probar")
      window.location.reload();  //se recarga la pagina
    });
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
      alert("¡Skill agregada! ✔️, click en 'Aceptar' para recargar la página.");
      window.location.reload();
    } else {
      alert("¡Falló la carga de datos! ❌, intente nuevamente.");
      this.form.markAllAsTouched();
    }
  }

}