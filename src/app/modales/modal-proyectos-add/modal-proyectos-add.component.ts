//////////////////////COPIADO DEL SCR DE ESTA MANIANA, SI HAY PROBLEMAS VOLVER A VERSION   10-4-23 add delete proy arq OK//////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

//*************a ver si puedo editar subt que esta en entidad persona
//*****************************************NOPE, LIO, ESTE ES PARA AGREGAR Y TODAVIA NO SE COMO EDITAR!! 
/*import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HammerModule } from '@angular/platform-browser';*/

@Component({
  selector: 'app-modal-proyectos-add',
  templateUrl: './modal-proyectos-add.component.html',
  styleUrls: ['./modal-proyectos-add.component.css']
})

export class ModalProyectosAddComponent implements OnInit {

  form: FormGroup;

  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  rubro : string = '';
  imgPageProyecto : string = '';
  imgPageAlt : string = '';
  hrefTargetBlank : string = '';
  hrefRepo : string = '';
  hrefLive : string = '';
  tituloProyecto : string = '';
  descripcion : string = '';
  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  

  //***************************nuevo para conectar modal a la bd, lo anterior era hasta formularios reactivos */
  // + private proyWebServ: ProyectoWebService
  constructor(private formBuilder: FormBuilder, private proyServ: ProyectoService) {

    this.form = this.formBuilder.group({
      //subtituloproy: ['', [Validators.required]], //apago para que no sea obligatorio
      urlimg: ['', [Validators.required]],
      //altImg: ['', [Validators.required]],  //apago para que no sea obligatorio
      targetblank: ['', [Validators.required]],
      titulop: ['', [Validators.required]],
      //descripcionp: ['', [Validators.required]], //apago para que no sea obligatorio, compila ok

    })
  }

  ngOnInit() { }

  // metodos para el formulario
  get subtituloproy() {
    return this.form.get("subtituloproy");   //viene del html formControlName="", de ahi toma el dato
  }
  get subtituloproyValid() {
    return this.subtituloproy?.touched && !this.subtituloproy?.valid;  //metodo de validacion de nombre
  }

  ///////////////como anda esto no se, el nombre del input no tiene que ser el mismo que el atributo? 
  //o solo el ngmodel?  en educacion puse el mismo, en proyectos arq no, los dos andan, EL WEB NO ME ANDAAAAAAAAAAA
  get urlimg() {
    return this.form.get("urlimg");
  }
  get urlimgValid() {
    return this.urlimg?.touched && !this.urlimg?.valid;
  }

  get altImg() {
    return this.form.get("altImg");
  }
  get altImgValid() {
    return this.altImg?.touched && !this.altImg?.valid;
  }

  get targetblank() {
    return this.form.get("targetblank");
  }
  get targetblankValid() {
    return this.targetblank?.touched && !this.targetblank?.valid;
  }

  get titulop() {
    return this.form.get("titulop");
  }
  get titulopValid() {
    return this.titulop?.touched && !this.titulop?.valid;
  }

  get descripcionp() {
    return this.form.get("descripcionp");
  }
  get descripcionpValid() {
    return this.descripcionp?.touched && !this.descripcionp?.valid;
  }



 //para limpiar el form/////SE PUEDE PONER EN EL BOTON CLOSE MODAL DIJO H
 limpiar(): void {
  this.form.reset();
}

onCreate(): void {
  const estud = new Proyecto(
    this.rubro,
    this.imgPageProyecto,
    this.imgPageAlt,
    this.hrefTargetBlank,
    this.hrefRepo,
    this.hrefLive,
    this.tituloProyecto,
    this.descripcion);

    //PORQUE DICE (ESTU) AHIIII, NO IMPORTA?? PORQUE ME CREA Y BORRA BIEN??!! ah lo declara ahi arriba, estud, CAAMBIAR NOMBRE!!  EL WEB NO ANDA LPM
  this.proyServ.saveProyecto(estud).subscribe(data => {
    alert("esta alerta no sale, pero dejar vacia porque necesita 2 creo para andar bien, probar")
    window.location.reload();  //se recarga la pagina
  });
}

/*
  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert("Validaciones correctas, ¡Enviar!")
    } else {
      this.form.markAllAsTouched();
    }
  }
*/
  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {

      this.onCreate();          

      alert("Proyecto agregado ✔️, click en 'Aceptar' para recargar la página.");   
      window.location.reload();
     
    } else {
      
      alert("Falló la carga de datos ❌, intente nuevamente.");
      
      this.form.markAllAsTouched();
    }
  }

}