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
      logoInstitucion:['',[Validators.required]],
      anioeInstitucion:['', [Validators.required]],
      titulo:['', [Validators.required]],
   })
  }

  ngOnInit() {}

  get logoInstitucion(){
    return this.form.get("logoInstitucion"); 
  }
 
  get anioeInstitucion(){
   return this.form.get("anioeInstitucion");
  }

  get titulo(){
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
   */
 

  limpiar(): void{
    this.form.reset();
  }



  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}
