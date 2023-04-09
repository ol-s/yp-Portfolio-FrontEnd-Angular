import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';



@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit {

  form: FormGroup;
  //estudiosTodos: Educacion[] = [];
  logoInstitucion: string = '';
  logoAlt: string = '';
  anioeInstitucion: string = '';
  titulo: string = '';
  descripcion: string = '';



  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private educServ: EducacionService) {

    ///Creamos el grupo de controles para el formulario reactivo
    this.form = this.formBuilder.group({

      //id: [''],
      logoInstitucion: ['', [Validators.required]],
      logoAlt: [''],
      anioeInstitucion: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: [''],

    })
  }



  ngOnInit() { }



  // reactivos
  get Logo() {
    return this.form.get("logoInstitucion");
  }
  get Instituc() {
    return this.form.get("anioeInstitucion");
  }
  get Diploma() {
    return this.form.get("titulo"); //formControlName="titulo"
  }

  //para limpiar el form/////SE PUEDE PONER EN EL BOTON CLOSE MODAL DIJO H
  limpiar(): void {
    this.form.reset();
  }



  //new estudio, que en educacion.service.ts se ponia saveEducacion(Educacion: Educacion), aca se pone como una constante
  //y luego se llama al metodo con el nombre que tenia en el educacion service

  onCreate(): void {
    const estud = new Educacion(this.logoInstitucion, this.logoAlt, this.anioeInstitucion, this.titulo, this.descripcion);
    this.educServ.saveEducacion(estud).subscribe(data => {
      alert("Estudio añadido")
      window.location.reload();  //se recarga la pagina
    });
  }
  /* ESTABA ASI, H SACO LA ULTIMAPARTE COS ESTA EN EL onEnviar
    window.location.reload();  //se recarga la pagina
      }, err => {   //si hay error
        alert("fallo carga de datos, intente nuevamente");
        window.location.reload();
      });
    }
    */


  //click enviar, modulo 3 antes del ejercicio, h
  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {

      this.onCreate();          ///este agregue yo, cos esta enexpress, pero no en todos los otros que venia viendo...

      //alert("Estudio cargado correctamente!, click Aceptar para recargar la pagina.");
      //alert("¡Estudio agregado! ✔ Click en 'Aceptar' para recargar la página."); 
      alert("Estudio agregado ✔. Click en 'Aceptar' para recargar la página.");    //AHI ESTAAAAA, DA EL OK, PONES ACEPTAR Y RECARGA PAGINA
      //OJO OJO QUE SI NO LO HACE A LA PRIMERA HAY QUE PRENDER LA SEGUNDA ALERT, POR AHORA ANDUVO DE NUEVO BIEN CREAR Y ELIMINAR 7-4-23  18.50HS
      window.location.reload();
     

      //alert("Todo salió bien ¡Enviar formulario!")
    } else {
      //alert("Falló la carga de datos ✘. Intente nuevamente.");  //va ; ahi?
      alert("Falló la carga de datos ❌. Intente nuevamente.");
      
      this.form.markAllAsTouched();
    }
  }


}























///////////////cuando andaba, conectado a la bd corriendo el netbeans y angular
/*
import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit  {

  form: FormGroup;
 

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 

    ///Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
     
      //id: [''],
      logoInstitucion:['',[Validators.required]],
      logoAlt:[''],
      anioeInstitucion:['', [Validators.required]],
      titulo:['',[Validators.required]],
      descripcion:[''],
      
   })
  }



  ngOnInit() {}


  //////////////////////////////////////////////cambiados todos los nombres, tengo que hacer todo esto de nuevo maaan(porque me toma como declarado el atributo sino)
  get Logo(){
    return this.form.get("logoInstitucion"); 
  }
 
  get Instituc(){
   return this.form.get("anioeInstitucion"); 
  }

  get Diploma(){
    return this.form.get("titulo"); //formControlName="titulo"
   }


  //NO HACE FALTA ESTO PARECE(??)
   /*
  get logoInstitucionValid(){
    return this.logoInstitucion?.touched && !this.logoInstitucion?.valid;
  }
  get anioeInstitucionValid(){
    return this.logoInstitucion?.touched && !this.logoInstitucion?.valid;
  }
  get tituloValid(){
    return this.logoInstitucion?.touched && !this.logoInstitucion?.valid;
  }



  //para limpiar el form
  limpiar(): void{
    this.form.reset();
  }

  //click enviar
  onEnviar(event: Event){
    
    event.preventDefault; 
 
    if (this.form.valid){
 
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
     
      this.form.markAllAsTouched(); 
    }
 
  }


}
*/