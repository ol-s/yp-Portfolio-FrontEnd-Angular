import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-modal-red-add',
  templateUrl: './modal-red-add.component.html',
  styleUrls: ['./modal-red-add.component.css']
})
export class ModalRedAddComponent {

  form: FormGroup;

  nombre: string = ''; //no lo puse en validators cos no esta en el input 
  url: string = '';
  iconred: string = '';

  constructor(private formBuilder: FormBuilder, private redServ: RedService) {

    this.form = this.formBuilder.group({
      url: ['', [Validators.required]],
      iconred: ['', [Validators.required, Validators.max(100)]],
    })
  }

  ngOnInit() { }

  // metodos para el formulario
  get Red() {
    return this.form.get("url");
  }
  get Icono() {
    return this.form.get("iconred");
  }

  //para limpiar el form
  limpiar(): void {
    this.form.reset();
  }

  onCreate(): void {
    const red = new Red(
      this.nombre,
      this.url,
      this.iconred,);

    this.redServ.saveRed(red).subscribe(data => {
      alert("esta alerta no sale, pero dejar vacia porque necesita 2 creo para andar bien, probar");
      window.location.reload();  //se recarga la pagina
    });
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
      alert("¡Red agregada! ✔️, click en 'Aceptar' para recargar la página.");
      window.location.reload();
    } else {
      alert("¡Falló la carga de datos! ❌, intente nuevamente.");
      this.form.markAllAsTouched();
    }
  }
 
}