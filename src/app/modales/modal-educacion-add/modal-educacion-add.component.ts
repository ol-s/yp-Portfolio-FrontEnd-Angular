


///////////////cuando andaba

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
  }*/
   



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


