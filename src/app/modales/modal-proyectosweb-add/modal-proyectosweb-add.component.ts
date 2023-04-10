


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos
import { ProyectoWeb } from 'src/app/model/proyecto-web';
import { ProyectoWebService } from 'src/app/servicios/proyecto-web.service';


@Component({
  selector: 'app-modal-proyectosweb-add',
  templateUrl: './modal-proyectosweb-add.component.html',
  styleUrls: ['./modal-proyectosweb-add.component.css']
})
export class ModalProyectoswebAddComponent {

  form: FormGroup;

  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  imgPageProyecto : string = '';
  imgPageAlt : string = '';
  hrefTargetBlank : string = '';
  hrefRepo : string = '';
  hrefLive : string = '';
  tituloProyecto : string = '';
  descripcion : string = '';
  fecha : string = '';

  
  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  

  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  // + private proyWebServ: ProyectoWebService
  constructor(private formBuilder: FormBuilder, private proyWServ: ProyectoWebService) {

    this.form = this.formBuilder.group({
     
      imgPageProyecto: ['', [Validators.required]],
      imgPageAlt: [''],  
      hrefTargetBlank: [''],//imagen, apague en el html
      hrefRepo: ['', [Validators.required]],
      hrefLive: ['', [Validators.required]],
      tituloProyecto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: [''],
   

    })
  }

  ngOnInit() { }

  // metodos para el formulario

  get urlimg2() {
    return this.form.get("imgPageProyecto");
  }
  get urlimg2Valid() {
    return this.urlimg2?.touched && !this.urlimg2?.valid;
  }



  get altImg2() {
    return this.form.get("imgPageAlt");
  }
  get altImg2Valid() {
    return this.altImg2?.touched && !this.altImg2?.valid;
  }


  get targetblank2() {
    return this.form.get("hrefTargetBlank");
  }
  get targetblank2Valid() {
    return this.targetblank2?.touched && !this.targetblank2?.valid;
  }


  get repo() {
    return this.form.get("hrefRepo");
  }
  get repoValid() {
    return this.repo?.touched && !this.repo?.valid;
  }


  get live() {
    return this.form.get("hrefLive");
  }
  get liveValid() {
    return this.live?.touched && !this.live?.valid;
  }



  get fechap2() {
    return this.form.get("fecha");
  }
  get fechap2Valid() {
    return this.fechap2?.touched && !this.fechap2?.valid;
  }


  get titulop2() {
    return this.form.get("tituloProyecto");
  }
  get titulop2Valid() {
    return this.titulop2?.touched && !this.titulop2?.valid;
  }


  get descripcionp2() {
    return this.form.get("descripcion");
  }
  get descripcionp2Valid() {
    return this.descripcionp2?.touched && !this.descripcionp2?.valid;
  }



 //para limpiar el form/////SE PUEDE PONER EN EL BOTON CLOSE MODAL DIJO H
 limpiar(): void {
  this.form.reset();
}

onCreate(): void {
  const pweb = new ProyectoWeb(
    this.imgPageProyecto,
    this.imgPageAlt,
    this.hrefTargetBlank,
    this.hrefRepo,
    this.hrefLive,
    this.tituloProyecto,
    this.descripcion,
    this.fecha,);

    
    

  this.proyWServ.saveProyectoW(pweb).subscribe(data => {
    alert("esta alerta no sale, pero dejar vacia porque necesita 2 creo para andar bien, probar")
    window.location.reload();  //se recarga la pagina
  });
}


  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {

      this.onCreate();          

      alert("¡Proyecto agregado! ✔, click en 'Aceptar' para recargar la página.");   
      window.location.reload();
     
    } else {
      
      alert("¡Falló la carga de datos! ❌, intente nuevamente.");
      
      this.form.markAllAsTouched();
    }
  }



  

}