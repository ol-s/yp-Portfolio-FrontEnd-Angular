import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-sobremi',
  templateUrl: './modal-sobremi.component.html',
  styleUrls: ['./modal-sobremi.component.css']
})

export class ModalSobremiComponent implements OnInit {  
   
    form: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
   
      this.form = this.formBuilder.group({
        
        titulouno: ['', [Validators.required]],
        textouno: ['', [Validators.required]],

        titulodos: ['', [Validators.required]],
        textodos: ['', [Validators.required]],     
      })
    }
  
    ngOnInit() { }
  
    // metodos para el formulario
    get titulouno() {
      return this.form.get("titulouno");  
    }
    get titulounoValid() {
      return this.titulouno?.touched && !this.titulouno?.valid;  
    }

    get textouno() {
      return this.form.get("textouno");   //viene del html formControlName="", de ahi toma el dato
    }
    get textounoValid() {
      return this.textouno?.touched && !this.textouno?.valid;  //metodo de validacion de nombre
    }

   

    get titulodos() {
      return this.form.get("titulodos");  
    }
    get titulodosValid() {
      return this.titulodos?.touched && !this.titulodos?.valid;  
    }

    get textodos() {
      return this.form.get("textodos");
    }
    get textodosValid() {
      return this.textodos?.touched && !this.textodos?.valid;  
    }

  

   



    onEnviar(event: Event) {      
      event.preventDefault; 
      if (this.form.valid) {
        alert("Validaciones correctas, ¡Enviar!")
      } else {   
        this.form.markAllAsTouched();
      }  
    }
   
  }

