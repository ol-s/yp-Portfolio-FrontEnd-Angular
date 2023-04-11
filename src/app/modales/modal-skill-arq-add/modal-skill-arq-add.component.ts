import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';

@Component({
  selector: 'app-modal-skill-arq-add',
  templateUrl: './modal-skill-arq-add.component.html',
  styleUrls: ['./modal-skill-arq-add.component.css']
})

export class ModalSkillArqAddComponent {

  form: FormGroup;

  nombre: string = '';
  porcentaje: string = '';

  constructor(private formBuilder: FormBuilder, private saServ: SkillArqService) {

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
   get SkillValid() {
     return this.Skill?.touched && !this.Skill?.valid;  
   }
   get PorcValid() {
     return this.Porc?.touched && !this.Porc?.valid;  
   }



  //para limpiar el form/////SE PUEDE PONER EN EL BOTON CLOSE MODAL DIJO H
  limpiar(): void {
    this.form.reset();
  }

  onCreate(): void {
    const pweb = new SkillArq(
      this.nombre,
      this.porcentaje,);

    this.saServ.saveSkillA(pweb).subscribe(data => {
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
  /*
  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert("Validaciones correctas, ¡Enviar!")
    } else {
      this.form.markAllAsTouched();
    }
  }*/

}