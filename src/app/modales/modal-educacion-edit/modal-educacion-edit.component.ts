import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-educacion-edit',
  templateUrl: './modal-educacion-edit.component.html',
  styleUrls: ['./modal-educacion-edit.component.css']
})
export class ModalEducacionEditComponent implements OnInit  {

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
    return this.form.get("titulo"); //formControlName="titulo2"
   }

  get logoInstitucionValid(){
    return this.logoInstitucion?.touched && !this.logoInstitucion?.valid;
  }

  get anioeInstitucionValid(){
    return this.anioeInstitucion?.touched && !this.anioeInstitucion?.valid;
  }

  get tituloValid(){
    return this.titulo?.touched && !this.titulo?.valid;
  }

 
  onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      alert("Todo salio bien ¡Enviar formulario!")
    }else{    
      this.form.markAllAsTouched(); 
    } 
  }
}
